import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/jyoti-medical-logo.svg';

export default function Navbar() {
  const { totalItems } = useCart();
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img
                src={logo}
                alt="Jyoti Medical"
                className="h-12 w-auto max-w-[240px] object-contain"
              />
            </Link>
          </div>

          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                className="w-full bg-slate-100 border-none rounded-full py-2.5 pl-5 pr-12 focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-inner"
                placeholder="Search for medicines, health products..."
              />
              <button className="absolute right-3 top-2.5 text-slate-400 hover:text-primary">
                <Search size={20} />
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/medicines" className="text-slate-600 hover:text-primary font-medium">Browse Medicines</Link>
            <Link to="/upload" className="text-slate-600 hover:text-primary font-medium">Upload Prescription</Link>
            
            <Link to="/cart" className="text-slate-600 hover:text-primary relative flex items-center">
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </Link>

            {user ? (
              <div className="flex items-center gap-4">
                <Link to="/orders" className="text-slate-600 hover:text-primary font-medium">My Orders</Link>
                <button onClick={logout} className="text-slate-600 hover:text-primary font-medium">Logout</button>
              </div>
            ) : (
              <Link to="/login" className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-full font-medium transition-colors">
                Login
              </Link>
            )}
          </div>

          <div className="md:hidden flex items-center gap-4">
             <Link to="/cart" className="text-slate-600 relative">
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </Link>
            <button className="text-slate-600 hover:text-primary">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
