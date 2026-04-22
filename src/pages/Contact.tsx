import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send, CheckCircle2, Loader2 } from 'lucide-react';
import React, { useState } from 'react';
import { db, collection, addDoc, serverTimestamp } from '../firebase';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childAge: '',
    programInterest: '',
    message: '',
    type: 'enrollment'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Save to Firestore
      await addDoc(collection(db, 'inquiries'), {
        ...formData,
        status: 'new',
        createdAt: serverTimestamp()
      });

      // 2. Trigger Integrations (Email + Google Sheets) via our backend
      // This path works both in local dev (Express) and Firebase Hosting (Functions rewrite)
      await fetch('/api/inquiry-integration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      setIsSuccess(true);
      setFormData({ parentName: '', email: '', phone: '', childAge: '', programInterest: '', message: '', type: 'enrollment' });
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting your inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-transparent">
      {/* Hero */}
      <section className="hero-simple">
        <div className="section-container text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6"
          >
            Get in Touch
          </motion.h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about enrollment or our programs? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">Visit Our School</h2>
              <p className="text-gray-600 mb-12 leading-relaxed">
                We are located in the heart of Mazgaon. We welcome parents to visit our facility and see our nurturing environment firsthand. Please call ahead to schedule a tour.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Location</h4>
                    <p className="text-gray-600">Mazgaon, Mumbai, Maharashtra</p>
                    <div className="flex items-center gap-4 mt-2">
                      <p className="text-sm text-quaternary font-medium">#1 Pre School in Mazgaon</p>
                      <a 
                        href="https://www.google.com/maps/place/Kids+Club+by+Nisreen/@18.9713022,72.8398292,829m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3be7cf07592b7ae9:0x2c808e5ad59c769e!8m2!3d18.9712971!4d72.8424041!16s%2Fg%2F11szfx_1f1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-secondary hover:underline flex items-center gap-1"
                      >
                        Get Directions
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-quaternary/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Phone</h4>
                    <p className="text-gray-600">+91 12345 67890</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail className="text-quaternary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">info@kidsclubnisreen.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-tertiary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-tertiary w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">Thank You!</h3>
                  <p className="text-gray-600 mb-8">Your inquiry has been received. We will get back to you shortly.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-quaternary font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-8">Enrollment Inquiry</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-label">Parent Name</label>
                      <input 
                        required
                        type="text" 
                        value={formData.parentName}
                        onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                        className="input-field"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Child's Age</label>
                      <input 
                        type="text" 
                        value={formData.childAge}
                        onChange={(e) => setFormData({...formData, childAge: e.target.value})}
                        className="input-field"
                        placeholder="e.g. 3 years"
                      />
                    </div>
                  </div>
                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input 
                        required
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="input-field"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Mobile Phone</label>
                      <input 
                        required
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="input-field"
                        placeholder="+91 12345 67890"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Program of Interest (Optional)</label>
                      <select 
                        value={formData.programInterest}
                        onChange={(e) => setFormData({...formData, programInterest: e.target.value})}
                        className="input-field cursor-pointer appearance-none"
                      >
                        <option value="">Select a program</option>
                        <option value="preschool">Preschool</option>
                        <option value="activity-club">Activity Club</option>
                        <option value="reading-circle">Reading Circle</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Message</label>
                      <textarea 
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="input-textarea"
                        placeholder="Tell us about your child..."
                      ></textarea>
                    </div>
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-submit"
                    >
                      {isSubmitting ? <Loader2 className="animate-spin" /> : <><Send size={18} /> Send Message</>}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
