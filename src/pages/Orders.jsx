import { Package, Clock, CheckCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

export default function Orders() {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  // Mock orders
  const orders = [
    { id: 'ORD-58291', date: 'April 7, 2026', total: 649, status: 'Delivered', statusColor: 'bg-green-100 text-green-700', icon: <CheckCircle size={18} /> },
    { id: 'ORD-77234', date: 'April 1, 2026', total: 199, status: 'Pending', statusColor: 'bg-yellow-100 text-yellow-700', icon: <Clock size={18} /> },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-800 mb-8">My Orders</h1>
      
      <div className="space-y-6">
        {orders.map(order => (
          <div key={order.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="bg-slate-50 w-16 h-16 rounded-xl flex items-center justify-center text-slate-400">
                <Package size={28} />
              </div>
              <div>
                <p className="font-bold text-slate-800">{order.id}</p>
                <p className="text-sm text-slate-500">Placed on {order.date}</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between w-full md:w-auto gap-8">
              <div>
                <p className="text-sm text-slate-500">Total Amount</p>
                <p className="font-bold text-slate-800">₹{order.total}</p>
              </div>
              
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium ${order.statusColor}`}>
                {order.icon}
                {order.status}
              </div>
              
              <button className="text-primary font-medium hover:underline text-sm hidden sm:block">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
