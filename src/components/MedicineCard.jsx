import { useCart } from '../context/CartContext';
import { Star, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MedicineCard({ medicine }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100 overflow-hidden flex flex-col pt-4">
      <Link to={`/medicine/${medicine.id}`} className="block relative px-4 pt-2 pb-4">
        {medicine.type && (
          <span className={`absolute top-0 left-4 text-xs font-bold px-2 py-1 rounded text-white ${medicine.type === 'Bestseller' ? 'bg-green-500' : medicine.type === 'Rx' ? 'bg-blue-500' : 'bg-purple-500'}`}>
            {medicine.type === 'Rx' ? 'Rx RX' : medicine.type}
          </span>
        )}
        <div className="flex justify-center mb-4">
          <img src={medicine.image} alt={medicine.name} className="h-40 object-contain" />
        </div>
        <p className="text-sm text-primary font-medium mb-1">{medicine.category}</p>
        <h3 className="font-bold text-slate-800 text-lg leading-tight mb-1">{medicine.name}</h3>
        <p className="text-sm text-slate-500 mb-4">{medicine.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-end gap-2">
            <span className="font-bold text-xl text-slate-800">₹{medicine.price}</span>
            {medicine.originalPrice && <span className="text-sm text-slate-400 line-through mb-1">₹{medicine.originalPrice}</span>}
          </div>
          <div className="flex items-center gap-1 text-sm font-medium text-slate-600">
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            {medicine.rating}
          </div>
        </div>
      </Link>
      
      <div className="px-4 pb-4 mt-auto">
        <button 
          onClick={() => addToCart(medicine)}
          className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white py-2.5 rounded-lg font-medium transition-colors"
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
