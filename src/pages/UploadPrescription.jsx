import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UploadCloud, File, CheckCircle, X, AlertCircle, Mail } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import emailjs from '@emailjs/browser';

// ─── EmailJS Configuration ───────────────────────────────────────────────────
// Replace these 3 values after setting up EmailJS (see instructions below)
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
// ─────────────────────────────────────────────────────────────────────────────

const ADMIN_EMAIL = 'rhushikesh2005@gmail.com';

export default function UploadPrescription() {
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [emailStatus, setEmailStatus] = useState(null); // 'sent' | 'failed' | null
  const [dragOver, setDragOver] = useState(false);
  const navigate = useNavigate();
  const { clearCart } = useCart();
  const { user } = useAuth();

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const dropped = e.dataTransfer.files[0];
    if (dropped) setFile(dropped);
  };

  const sendAdminEmail = async () => {
    const templateParams = {
      admin_email:  ADMIN_EMAIL,
      user_name:    user?.name  || 'Guest User',
      user_email:   user?.email || 'Not logged in',
      file_name:    file.name,
      file_size:    `${(file.size / 1024 / 1024).toFixed(2)} MB`,
      upload_time:  new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      to_email:     ADMIN_EMAIL,
    };

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    setIsUploading(true);
    setEmailStatus(null);

    try {
      // Send email notification to admin
      await sendAdminEmail();
      setEmailStatus('sent');
    } catch (err) {
      console.error('EmailJS error:', err);
      setEmailStatus('failed');
    }

    // Complete the upload flow regardless of email status
    setTimeout(() => {
      setIsUploading(false);
      setIsSuccess(true);
      clearCart();
      setTimeout(() => navigate('/orders'), 3000);
    }, 500);
  };

  // ── Success Screen ──────────────────────────────────────────────────────────
  if (isSuccess) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
          <CheckCircle size={48} className="text-green-500" />
        </div>
        <h2 className="text-3xl font-bold text-slate-800 mb-3">Prescription Uploaded!</h2>
        <p className="text-lg text-slate-500 mb-6">
          Our pharmacists are reviewing your prescription.
        </p>

        {/* Email notification badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 ${
          emailStatus === 'sent'
            ? 'bg-blue-50 text-blue-700 border border-blue-200'
            : 'bg-amber-50 text-amber-700 border border-amber-200'
        }`}>
          <Mail size={16} />
          {emailStatus === 'sent'
            ? `Admin notified at ${ADMIN_EMAIL}`
            : 'Admin notification pending (configure EmailJS)'}
        </div>

        <p className="text-slate-400 text-sm">Redirecting to your orders…</p>
      </div>
    );
  }

  // ── Upload Screen ───────────────────────────────────────────────────────────
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Upload Prescription</h1>
      <p className="text-slate-500 mb-8">
        Please upload a valid prescription. Our admin will be notified instantly.
      </p>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        {!file ? (
          /* ── Drop Zone ─────────────────────────────────────────────────── */
          <div
            className={`border-2 border-dashed rounded-xl p-12 text-center transition-all duration-200 ${
              dragOver
                ? 'border-primary bg-primary/5 scale-[1.01]'
                : 'border-slate-300 hover:border-primary hover:bg-slate-50'
            }`}
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
          >
            <input
              type="file"
              id="prescription"
              className="hidden"
              accept="image/*,.pdf"
              onChange={handleFileChange}
            />
            <label htmlFor="prescription" className="cursor-pointer flex flex-col items-center">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-5 transition-colors ${
                dragOver ? 'bg-primary text-white' : 'bg-blue-50 text-blue-500'
              }`}>
                <UploadCloud size={36} />
              </div>
              <span className="font-bold text-slate-800 text-lg mb-1">Click to upload</span>
              <span className="text-slate-500 text-sm">or drag and drop</span>
              <span className="text-slate-400 text-xs mt-4">JPG, PNG or PDF (Max. 5MB)</span>
            </label>
          </div>
        ) : (
          /* ── File Selected ─────────────────────────────────────────────── */
          <div className="border border-slate-200 rounded-xl p-6 relative">
            <button
              onClick={() => setFile(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-green-50 text-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <File size={28} />
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="font-semibold text-slate-800 truncate">{file.name}</p>
                <p className="text-sm text-slate-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
            </div>

            {/* Admin notification info */}
            <div className="mt-5 flex items-start gap-2 bg-blue-50 border border-blue-100 rounded-lg px-4 py-3">
              <Mail size={15} className="text-blue-500 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-blue-700">
                Submitting will send an email notification to <strong>{ADMIN_EMAIL}</strong>
              </p>
            </div>

            <div className="mt-5 pt-5 border-t border-slate-100 flex gap-3">
              <button
                className="flex-1 border border-slate-300 text-slate-700 py-3 rounded-xl font-semibold hover:bg-slate-50 transition-colors"
                onClick={() => setFile(null)}
              >
                Cancel
              </button>
              <button
                className="flex-[2] bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary-dark transition-colors flex justify-center items-center gap-2"
                onClick={handleSubmit}
                disabled={isUploading}
              >
                {isUploading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending to Admin…
                  </>
                ) : (
                  <>
                    <Mail size={18} />
                    Submit Prescription
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Guide */}
      <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-6">
        <h3 className="font-bold text-blue-900 mb-3 text-sm uppercase tracking-wide">
          Valid Prescription Guide
        </h3>
        <ul className="text-sm text-blue-800 space-y-2 list-disc list-inside">
          <li>Must contain doctor's details (Name, Degree, Registration Number)</li>
          <li>Must clearly show patient name and date of visit</li>
          <li>Medicines must be clearly readable</li>
          <li>Prescription must not be older than 6 months</li>
        </ul>
      </div>
    </div>
  );
}
