import { useState, useEffect } from 'react';
import { auth, googleProvider, signInWithPopup, signOut, onAuthStateChanged, db, collection, query, orderBy, onSnapshot, doc, updateDoc, deleteDoc } from '../firebase';
import { LogIn, LogOut, Trash2, CheckCircle, Clock, Archive, Mail, User, Calendar, Star, Phone } from 'lucide-react';
import { motion } from 'motion/react';

interface Inquiry {
  id: string;
  parentName: string;
  email: string;
  phone?: string;
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
  const [isAuthorized, setIsAuthorized] = useState(true);
  const [authError, setAuthError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      if (!user) {
        setIsAuthorized(true); // Reset on logout
        setAuthError(null);
      }
    });
    return () => unsubscribeAuth();
  }, []);

  useEffect(() => {
    if (!user) return;

    // We fetch from both collections in case there's data in the old one
    const qInquiries = query(collection(db, 'inquiries'), orderBy('createdAt', 'desc'));
    const qApplications = query(collection(db, 'applications'), orderBy('createdAt', 'desc'));

    const unsubInquiries = onSnapshot(qInquiries, (snapshot) => {
      const inquiryData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        source: 'inquiries'
      })) as any[];
      
      setInquiries(prev => {
        const others = prev.filter(p => (p as any).source !== 'inquiries');
        const next = [...inquiryData, ...others];
        return next.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));
      });
      setIsAuthorized(true);
    }, (error) => {
      console.error("Inquiries Firestore Error:", error);
      if (error.message.includes("permission-denied")) {
        setIsAuthorized(false);
      }
    });

    const unsubApps = onSnapshot(qApplications, (snapshot) => {
      const appData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        // Map old application fields to inquiry format if needed
        parentName: (doc.data() as any).fullName || (doc.data() as any).parentName,
        message: (doc.data() as any).bio || (doc.data() as any).message,
        programInterest: (doc.data() as any).position || (doc.data() as any).programInterest,
        type: (doc.data() as any).type || 'career-inquiry',
        source: 'applications'
      })) as any[];

      setInquiries(prev => {
        const others = prev.filter(p => (p as any).source !== 'applications');
        const next = [...appData, ...others];
        return next.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));
      });
    }, (error) => {
      // Old collection might not even exist or have rules, so we'll be quiet here
      console.debug("Applications collection fetch ignored or failed:", error.message);
    });

    return () => {
      unsubInquiries();
      unsubApps();
    };
  }, [user]);

  const handleLogin = async () => {
    setAuthError(null);
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error: any) {
      console.error("Login error:", error);
      setAuthError(error.message || "An unknown error occurred during login.");
    }
  };

  const handleLogout = () => signOut(auth);

  const updateStatus = async (inquiry: any, status: string) => {
    const collectionName = (inquiry as any).source || 'inquiries';
    await updateDoc(doc(db, collectionName, inquiry.id), { status });
  };

  const deleteInquiry = async (inquiry: any) => {
    if (window.confirm("Are you sure you want to delete this inquiry?")) {
      const collectionName = (inquiry as any).source || 'inquiries';
      await deleteDoc(doc(db, collectionName, inquiry.id));
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
          <p className="text-gray-600 mb-6">Please sign in with your authorized Google account to manage inquiries.</p>
          
          {authError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm text-left">
              <p className="font-bold mb-1">Login Error:</p>
              <p>{authError}</p>
              {authError.includes('unauthorized-domain') && (
                <p className="mt-2 text-xs text-red-500">
                  Tip: Make sure you added the preview domains to your Firebase Console under Authentication → Settings → Authorized Domains.
                </p>
              )}
            </div>
          )}

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

  if (!isAuthorized) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-50 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-12 rounded-[3rem] shadow-xl text-center max-w-md w-full border border-gray-100"
        >
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <LogOut className="text-red-500 w-10 h-10" />
          </div>
          <h1 className="text-3xl font-display font-bold text-gray-900 mb-4">Access Denied</h1>
          <p className="text-gray-600 mb-6">Your account ({user.email}) is not authorized to access the admin panel.</p>
          <p className="text-sm text-gray-400 mb-10 text-left bg-gray-50 p-4 rounded-xl">
            If this is your primary email, please contact the developer to grant admin permissions to this account.
          </p>
          <button 
            onClick={handleLogout}
            className="w-full py-4 bg-gray-200 text-gray-800 rounded-2xl font-bold hover:bg-gray-300 transition-all"
          >
            Sign Out & Try Another Account
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
                      {inquiry.createdAt && typeof inquiry.createdAt.toDate === 'function' 
                        ? inquiry.createdAt.toDate().toLocaleString() 
                        : 'Processing...'}
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
                    {inquiry.phone && (
                      <div className="flex items-center gap-3 text-gray-600">
                        <Phone size={18} className="text-gray-400" />
                        {inquiry.phone}
                      </div>
                    )}
                    {inquiry.programInterest && (
                      <div className="flex items-center gap-3 text-quaternary font-medium">
                        <Star size={18} className="text-quaternary/40" />
                        {inquiry.type === 'career-inquiry' ? 'Applying for:' : 'Interested in:'} <span className="capitalize">{inquiry.programInterest.replace('-', ' ')}</span>
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
                      onClick={() => updateStatus(inquiry, 'read')}
                      className="p-3 bg-tertiary/10 text-tertiary rounded-xl hover:bg-tertiary/20 transition-colors"
                      title="Mark as Read"
                    >
                      <CheckCircle size={20} />
                    </button>
                  )}
                  {inquiry.status !== 'archived' && (
                    <button 
                      onClick={() => updateStatus(inquiry, 'archived')}
                      className="p-3 bg-gray-50 text-gray-600 rounded-xl hover:bg-gray-100 transition-colors"
                      title="Archive"
                    >
                      <Archive size={20} />
                    </button>
                  )}
                  <button 
                    onClick={() => deleteInquiry(inquiry)}
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
