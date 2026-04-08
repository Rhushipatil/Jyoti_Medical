import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Trash2, AlertCircle } from 'lucide-react';

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();

  const hasPrescriptionMed = cart.some(item => item.prescription);

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Your Cart is Empty</h2>
        <p className="text-slate-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/medicines" className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors">
          Browse Medicines
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-slate-800 mb-8">Shopping Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
             {cart.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row items-center p-6 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors">
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-contain rounded-lg bg-white p-2 border border-slate-100 mb-4 sm:mb-0" />
                  
                  <div className="sm:ml-6 flex-1 text-center sm:text-left">
                    <h3 className="font-bold text-lg text-slate-800">{item.name}</h3>
                    <p className="text-sm text-slate-500 mb-2">{item.category}</p>
                    {item.prescription && (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                        Rx Required
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-6 mt-4 sm:mt-0 w-full sm:w-auto justify-between sm:justify-end">
                    <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden h-10 w-28 bg-white">
                      <button 
                        className="w-8 h-full flex items-center justify-center text-slate-600 font-bold hover:bg-slate-100 transition-colors"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >-</button>
                      <div className="flex-1 flex items-center justify-center text-sm font-medium border-x border-slate-100">{item.quantity}</div>
                      <button 
                        className="w-8 h-full flex items-center justify-center text-slate-600 font-bold hover:bg-slate-100 transition-colors"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >+</button>
                    </div>
                    
                    <div className="w-24 text-right">
                       <p className="font-bold text-lg text-slate-800">₹{item.price * item.quantity}</p>
                    </div>
                    
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-400 hover:text-red-600 p-2 rounded-full hover:bg-red-50 transition-colors"
                      title="Remove"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
             ))}
          </div>
          
          <div className="mt-4 flex justify-between items-center">
            <button onClick={clearCart} className="text-slate-500 hover:text-slate-800 font-medium text-sm">Empty Cart</button>
            <Link to="/medicines" className="text-primary hover:text-primary-dark font-medium text-sm">Continue Shopping</Link>
          </div>
        </div>
        
        <div className="lg:w-96">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sticky top-28">
            <h2 className="text-xl font-bold text-slate-800 mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal ({cart.reduce((a,b)=>a+b.quantity, 0)} items)</span>
                <span>₹{totalPrice}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Delivery Charges</span>
                {totalPrice > 500 ? (
                  <span className="text-green-500 font-medium">Free</span>
                ) : (
                  <span>₹50</span>
                )}
              </div>
            </div>
            
            <div className="border-t border-slate-100 pt-4 mb-6">
              <div className="flex justify-between items-end">
                <span className="font-bold text-slate-800">Total Amount</span>
                <span className="text-2xl font-bold text-primary">₹{totalPrice > 500 ? totalPrice : totalPrice + 50}</span>
              </div>
            </div>
            
            {hasPrescriptionMed && (
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex gap-3 mb-6">
                <AlertCircle className="text-blue-500 shrink-0" size={20} />
                <p className="text-sm text-blue-800">Your cart contains prescription medicines. Make sure to upload a valid prescription during checkout.</p>
              </div>
            )}
            
            <Link 
              to={hasPrescriptionMed ? "/upload" : "/orders"} 
              onClick={() => !hasPrescriptionMed && clearCart()}
              className="w-full flex items-center justify-center bg-green-500 hover:bg-green-600 text-white py-3.5 rounded-xl font-bold transition-colors shadow-lg shadow-green-500/20"
            >
              {hasPrescriptionMed ? 'Proceed to Upload Rx' : 'Proceed to Checkout'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
