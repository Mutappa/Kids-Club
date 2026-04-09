import { useState, useEffect } from 'react';
import { auth, googleProvider, signInWithPopup, signOut, onAuthStateChanged, db, collection, query, orderBy, onSnapshot, doc, updateDoc, deleteDoc } from '../firebase';
import { LogIn, LogOut, Trash2, CheckCircle, Clock, Archive, Mail, User, Calendar, Star } from 'lucide-react';
import { motion } from 'motion/react';

interface Inquiry {
  id: string;
  parentName: string;
  email: string;
  childAge: string;
  programInterest?: string;
  message: string;
  type: string;
  status: 'new' | 'read' | 'archived';
  createdAt: any;
}

export default function Admin() {
  const [user, setUser] = useState<any>(null);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribeAuth();
  }, []);

  useEffect(() => {
    if (!user) return;

    const q = query(collection(db, 'inquiries'), orderBy('createdAt', 'desc'));
    const unsubscribeInquiries = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Inquiry[];
      setInquiries(data);
    });

    return () => unsubscribeInquiries();
  }, [user]);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleLogout = () => signOut(auth);

  const updateStatus = async (id: string, status: string) => {
    await updateDoc(doc(db, 'inquiries', id), { status });
  };

  const deleteInquiry = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this inquiry?")) {
      await deleteDoc(doc(db, 'inquiries', id));
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  if (!user) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-50 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-12 rounded-[3rem] shadow-xl text-center max-w-md w-full border border-gray-100"
        >
          <div className="w-20 h-20 bg-quaternary/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <LogIn className="text-secondary w-10 h-10" />
          </div>
          <h1 className="text-3xl font-display font-bold text-gray-900 mb-4">Admin Access</h1>
          <p className="text-gray-600 mb-10">Please sign in with your authorized Google account to manage inquiries.</p>
          <button 
            onClick={handleLogin}
            className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-black transition-all flex items-center justify-center gap-3"
          >
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-6 h-6" alt="Google" />
            Sign in with Google
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-display font-bold text-gray-900">Inquiry Management</h1>
            <p className="text-gray-500">Welcome back, {user.displayName}</p>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 px-6 py-2 bg-white border border-gray-200 rounded-full text-gray-600 hover:text-quaternary transition-colors font-medium"
          >
            <LogOut size={18} /> Sign Out
          </button>
        </div>

        <div className="grid gap-6">
          {inquiries.length === 0 ? (
            <div className="bg-white p-20 rounded-[2rem] text-center border border-gray-100">
              <p className="text-gray-400">No inquiries found yet.</p>
            </div>
          ) : (
            inquiries.map((inquiry) => (
              <motion.div 
                key={inquiry.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col md:flex-row gap-8 items-start ${inquiry.status === 'archived' ? 'opacity-60' : ''}`}
              >
                <div className="flex-grow space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                      inquiry.status === 'new' ? 'bg-primary/10 text-primary' : 
                      inquiry.status === 'read' ? 'bg-tertiary/20 text-tertiary' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {inquiry.status}
                    </span>
                    <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold uppercase tracking-wider">
                      {inquiry.type}
                    </span>
                    <div className="flex items-center gap-1 text-gray-400 text-xs">
                      <Calendar size={14} />
                      {inquiry.createdAt?.toDate().toLocaleString()}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 text-gray-800 font-bold">
                      <User size={18} className="text-gray-400" />
                      {inquiry.parentName} {inquiry.childAge && <span className="text-gray-400 font-normal">({inquiry.childAge})</span>}
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Mail size={18} className="text-gray-400" />
                      {inquiry.email}
                    </div>
                    {inquiry.programInterest && (
                      <div className="flex items-center gap-3 text-quaternary font-medium">
                        <Star size={18} className="text-quaternary/40" />
                        Interested in: <span className="capitalize">{inquiry.programInterest.replace('-', ' ')}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-gray-600 bg-gray-50 p-4 rounded-xl border border-gray-100 italic">
                    "{inquiry.message}"
                  </p>
                </div>

                <div className="flex md:flex-col gap-2 shrink-0">
                  {inquiry.status !== 'read' && (
                    <button 
                      onClick={() => updateStatus(inquiry.id, 'read')}
                      className="p-3 bg-tertiary/10 text-tertiary rounded-xl hover:bg-tertiary/20 transition-colors"
                      title="Mark as Read"
                    >
                      <CheckCircle size={20} />
                    </button>
                  )}
                  {inquiry.status !== 'archived' && (
                    <button 
                      onClick={() => updateStatus(inquiry.id, 'archived')}
                      className="p-3 bg-gray-50 text-gray-600 rounded-xl hover:bg-gray-100 transition-colors"
                      title="Archive"
                    >
                      <Archive size={20} />
                    </button>
                  )}
                  <button 
                    onClick={() => deleteInquiry(inquiry.id)}
                    className="p-3 bg-quaternary/10 text-quaternary rounded-xl hover:bg-quaternary/20 transition-colors"
                    title="Delete"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
