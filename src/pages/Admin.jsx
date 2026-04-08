import { useState } from 'react';
import { FileText, Plus, Search, FileImage } from 'lucide-react';

export default function Admin() {
  const [activeTab, setActiveTab] = useState('medicines');
  
  // Mock data
  const prescriptions = [
    { id: 'RX-1029', user: 'John Doe', date: 'April 7, 2026', status: 'Pending' },
    { id: 'RX-1028', user: 'Jane Smith', date: 'April 6, 2026', status: 'Approved' },
  ];

  return (
    <div className="flex bg-slate-50 min-h-[85vh]">
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 text-slate-300 p-6 hidden md:block">
        <h2 className="text-xl font-bold text-white mb-8 border-b border-slate-700 pb-4">Admin Panel</h2>
        <nav className="space-y-2">
          <button 
            onClick={() => setActiveTab('medicines')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${activeTab === 'medicines' ? 'bg-primary text-white' : 'hover:bg-slate-800'}`}
          >
            <Plus size={20} /> Add Medicine
          </button>
          <button 
            onClick={() => setActiveTab('prescriptions')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${activeTab === 'prescriptions' ? 'bg-primary text-white' : 'hover:bg-slate-800'}`}
          >
            <FileText size={20} /> Prescriptions
          </button>
        </nav>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Mobile controls */}
        <div className="md:hidden flex gap-2 mb-6">
          <button onClick={() => setActiveTab('medicines')} className={`px-4 py-2 rounded-lg text-sm font-medium ${activeTab === 'medicines' ? 'bg-primary text-white' : 'bg-white border border-slate-200'}`}>Medicines</button>
          <button onClick={() => setActiveTab('prescriptions')} className={`px-4 py-2 rounded-lg text-sm font-medium ${activeTab === 'prescriptions' ? 'bg-primary text-white' : 'bg-white border border-slate-200'}`}>Prescriptions</button>
        </div>

        {activeTab === 'medicines' && (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 max-w-2xl">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Add New Product</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Medicine Name</label>
                  <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-primary focus:border-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Category</label>
                  <select className="w-full px-4 py-2 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-primary focus:border-primary">
                    <option>Fever</option>
                    <option>Antibiotics</option>
                    <option>Vitamins</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Price (₹)</label>
                  <input type="number" className="w-full px-4 py-2 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-primary focus:border-primary" />
                </div>
                <div className="flex items-end pb-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-primary rounded" />
                    <span className="text-sm font-medium text-slate-700">Requires Prescription (Rx)</span>
                  </label>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
                <textarea rows="4" className="w-full px-4 py-2 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-primary focus:border-primary"></textarea>
              </div>
              
              <button className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors">Save Product</button>
            </form>
          </div>
        )}
        
        {activeTab === 'prescriptions' && (
          <div>
            <div className="flex justify-between items-center mb-6">
               <h2 className="text-2xl font-bold text-slate-800">Review Prescriptions</h2>
               <div className="relative">
                 <Search size={18} className="absolute left-3 top-2.5 text-slate-400" />
                 <input type="text" placeholder="Search..." className="pl-10 pr-4 py-2 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-primary" />
               </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 text-sm font-bold text-slate-600">ID</th>
                    <th className="px-6 py-4 text-sm font-bold text-slate-600">User</th>
                    <th className="px-6 py-4 text-sm font-bold text-slate-600">Date</th>
                    <th className="px-6 py-4 text-sm font-bold text-slate-600">File</th>
                    <th className="px-6 py-4 text-sm font-bold text-slate-600">Status</th>
                    <th className="px-6 py-4 text-sm font-bold text-slate-600 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {prescriptions.map((rx) => (
                    <tr key={rx.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-800">{rx.id}</td>
                      <td className="px-6 py-4 text-slate-600">{rx.user}</td>
                      <td className="px-6 py-4 text-slate-600">{rx.date}</td>
                      <td className="px-6 py-4">
                        <button className="flex items-center gap-2 text-primary hover:underline font-medium text-sm">
                          <FileImage size={16} /> View
                        </button>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${rx.status === 'Pending' ? 'bg-orange-100 text-orange-700' : 'bg-green-100 text-green-700'}`}>
                          {rx.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right space-x-2">
                        {rx.status === 'Pending' && (
                          <>
                            <button className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded font-medium text-sm transition-colors">Approve</button>
                            <button className="px-3 py-1 bg-red-100 hover:bg-red-200 text-red-600 rounded font-medium text-sm transition-colors">Reject</button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
