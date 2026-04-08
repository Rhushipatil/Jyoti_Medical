import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UploadCloud, File, CheckCircle, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function UploadPrescription() {
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) return;
    
    setIsUploading(true);
    // Simulate upload and order placement
    setTimeout(() => {
      setIsUploading(false);
      setIsSuccess(true);
      clearCart();
      
      // Redirect to orders after 3 seconds
      setTimeout(() => {
        navigate('/orders');
      }, 3000);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} className="text-green-500" />
        </div>
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Prescription Uploaded!</h2>
        <p className="text-lg text-slate-600 mb-8">Our pharmacists are reviewing your prescription. You will be redirected to your orders shortly.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Upload Prescription</h1>
      <p className="text-slate-500 mb-8">Please upload a valid prescription for your medicines.</p>
      
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        {!file ? (
          <div className="border-2 border-dashed border-slate-300 rounded-xl p-12 text-center hover:border-primary hover:bg-slate-50 transition-colors">
            <input 
              type="file" 
              id="prescription" 
              className="hidden" 
              accept="image/*,.pdf"
              onChange={handleFileChange}
            />
            <label htmlFor="prescription" className="cursor-pointer flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mb-4">
                <UploadCloud size={32} />
              </div>
              <span className="font-bold text-slate-800 text-lg mb-1">Click to upload</span>
              <span className="text-slate-500 text-sm">or drag and drop</span>
              <span className="text-slate-400 text-xs mt-4">JPG, PNG or PDF (Max. 5MB)</span>
            </label>
          </div>
        ) : (
          <div className="border border-slate-200 rounded-xl p-6 relative">
            <button 
              onClick={() => setFile(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-red-500"
            >
              <X size={20} />
            </button>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-50 text-green-500 rounded-lg flex items-center justify-center">
                <File size={24} />
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="font-medium text-slate-800 truncate">{file.name}</p>
                <p className="text-xs text-slate-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-slate-100 flex gap-4">
               <button 
                className="flex-1 border border-slate-300 text-slate-700 py-3 rounded-lg font-bold hover:bg-slate-50 transition-colors"
                onClick={() => setFile(null)}
               >
                 Cancel
               </button>
               <button 
                className="flex-[2] bg-primary text-white py-3 rounded-lg font-bold hover:bg-primary-dark transition-colors flex justify-center items-center"
                onClick={handleSubmit}
                disabled={isUploading}
               >
                 {isUploading ? (
                   <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                 ) : (
                   'Submit Prescription'
                 )}
               </button>
            </div>
          </div>
        )}
      </div>
      
      <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-6">
        <h3 className="font-bold text-blue-900 mb-3 text-sm uppercase tracking-wide">Valid Prescription Guide</h3>
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
