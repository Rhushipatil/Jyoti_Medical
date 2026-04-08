import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../services/api.mock';
import { useCart } from '../context/CartContext';
import { ShoppingCart, ShieldAlert, Star, Check, ChevronRight } from 'lucide-react';

export default function MedicineDetail() {
  const { id } = useParams();
  const [medicine, setMedicine] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    api.getMedicineById(id).then(setMedicine);
  }, [id]);

  if (!medicine) return <div className="p-20 text-center">Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-wrap items-center text-sm text-slate-500 mb-8 gap-2">
        <Link to="/" className="hover:text-primary">Home</Link> <ChevronRight size={16} />
        <Link to="/medicines" className="hover:text-primary">Medicines</Link> <ChevronRight size={16} />
        <Link to={`/medicines?category=${medicine.category}`} className="hover:text-primary">{medicine.category}</Link> <ChevronRight size={16} />
        <span className="text-slate-800 font-medium">{medicine.name}</span>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3 flex justify-center items-center bg-slate-50 rounded-xl p-8 border border-slate-100">
          <img src={medicine.image} alt={medicine.name} className="w-full h-auto object-contain max-h-80" />
        </div>
        
        <div className="md:w-2/3 flex flex-col">
          {medicine.prescription && (
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-md text-sm font-medium mb-4 self-start">
              <ShieldAlert size={16} /> Prescription Required
            </div>
          )}
          
          <h1 className="text-3xl font-bold text-slate-800 mb-2">{medicine.name}</h1>
          <p className="text-primary font-medium mb-4">{medicine.category}</p>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex flex-col">
               <div className="flex items-end gap-2">
                 <span className="text-4xl font-bold text-slate-800">₹{medicine.price}</span>
                 {medicine.originalPrice && <span className="text-lg text-slate-400 line-through mb-1">₹{medicine.originalPrice}</span>}
               </div>
               <span className="text-xs text-slate-500 uppercase tracking-wider">Inclusive of all taxes</span>
            </div>
            
            <div className="h-10 w-px bg-slate-200"></div>
            
            <div className="flex items-center gap-1 text-sm font-medium text-slate-600 bg-yellow-50 px-3 py-1 rounded-md">
              <Star size={16} className="text-yellow-400 fill-yellow-400" />
              {medicine.rating} Ratings
            </div>
          </div>
          
          <div className="mb-8 prose prose-slate">
            <h3 className="text-lg font-bold">Description</h3>
            <p>{medicine.description}</p>
            <p>Jyoti Medical ensures that all our products are strictly verified and authentic.</p>
          </div>
          
          <div className="mt-auto pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center border border-slate-300 rounded-lg overflow-hidden h-12 w-32">
              <button 
                className="w-10 h-full flex items-center justify-center bg-slate-50 hover:bg-slate-100 text-slate-600 font-bold transition-colors"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >-</button>
              <div className="flex-1 flex items-center justify-center font-medium bg-white h-full">{quantity}</div>
              <button 
                className="w-10 h-full flex items-center justify-center bg-slate-50 hover:bg-slate-100 text-slate-600 font-bold transition-colors"
                onClick={() => setQuantity(quantity + 1)}
              >+</button>
            </div>
            
            <button 
              onClick={() => addToCart(medicine, quantity)}
              className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white h-12 rounded-lg font-bold text-lg transition-colors w-full sm:w-auto shadow-lg shadow-primary/30"
            >
              <ShoppingCart size={20} />
              Add to Cart
            </button>
          </div>
          
          <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-600">
            <span className="flex items-center gap-1"><Check size={16} className="text-green-500"/> Genuine Product</span>
            <span className="flex items-center gap-1"><Check size={16} className="text-green-500"/> Secure Payments</span>
            <span className="flex items-center gap-1"><Check size={16} className="text-green-500"/> Fast Delivery</span>
          </div>
        </div>
      </div>
    </div>
  );
}
