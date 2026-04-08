import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Medicines from './pages/Medicines';
import MedicineDetail from './pages/MedicineDetail';
import Cart from './pages/Cart';
import UploadPrescription from './pages/UploadPrescription';
import Login from './pages/Login';
import Register from './pages/Register';
import Orders from './pages/Orders';
import Admin from './pages/Admin';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/medicines" element={<Medicines />} />
                <Route path="/medicine/:id" element={<MedicineDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/upload" element={<UploadPrescription />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/admin" element={<Admin />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
