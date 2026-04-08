import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../services/api.mock';
import MedicineCard from '../components/MedicineCard';
import CategoryCard from '../components/CategoryCard';
import { Truck, ShieldCheck, Clock, FileText, Pill, PackageCheck, UserCheck, Headphones } from 'lucide-react';

export default function Home() {
  const [medicines, setMedicines] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.getMedicines().then(setMedicines);
    api.getCategories().then(setCategories);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white pt-20 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden rounded-b-[3rem] shadow-lg">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
          <div className="flex-1 space-y-6">
            <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
              🚚 Free Delivery on Orders Above ₹500
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Your Health,<br /> <span className="text-secondary">Delivered Fast</span>
            </h1>
            <p className="text-lg text-primary-light max-w-xl text-slate-100">
              Get genuine medicines delivered to your doorstep. Upload your prescription, browse thousands of products, and track your orders easily.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/medicines" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3.5 rounded-full font-bold text-lg transition-colors flex items-center gap-2 shadow-lg shadow-green-500/30">
                Find Your Medicine <span className="text-xl">→</span>
              </Link>
              <Link to="/upload" className="bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm text-white px-8 py-3.5 rounded-full font-bold text-lg transition-colors flex items-center gap-2">
                <FileText size={20} />
                Upload Prescription
              </Link>
            </div>
            <div className="flex gap-8 pt-8 border-t border-white/20">
              <div>
                <p className="text-3xl font-bold">5000+</p>
                <p className="text-primary-light text-sm">Medicines</p>
              </div>
              <div>
                <p className="text-3xl font-bold">24/7</p>
                <p className="text-primary-light text-sm">Service</p>
              </div>
              <div>
                <p className="text-3xl font-bold">100%</p>
                <p className="text-primary-light text-sm">Genuine</p>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-video bg-slate-100/10">
               {/* Decorative floating boxes like in design */}
               <div className="absolute top-1/4 -left-6 bg-white rounded-xl shadow-xl p-3 flex items-center gap-3 animate-bounce shadow-[0_10px_40px_-5px_rgba(0,0,0,0.15)] backdrop-blur-xl border border-slate-100">
                 <div className="bg-green-100 text-green-600 p-2 rounded-full"><PackageCheck size={20} /></div>
                 <div>
                   <p className="text-sm font-bold text-slate-800">Order Delivered</p>
                   <p className="text-xs text-slate-500">2 mins ago</p>
                 </div>
               </div>
               
               <div className="absolute bottom-1/4 -right-6 bg-white rounded-xl shadow-xl p-3 flex items-center gap-3 animate-pulse shadow-[0_10px_40px_-5px_rgba(0,0,0,0.15)] backdrop-blur-xl border border-slate-100 z-20">
                 <div className="bg-blue-100 text-blue-600 p-2 rounded-full"><ShieldCheck size={20} /></div>
                 <div>
                   <p className="text-sm font-bold text-slate-800">Verified Products</p>
                   <p className="text-xs text-slate-500">100% Authentic</p>
                 </div>
               </div>

                <img src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1000&q=80" alt="Pharmacy" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-primary-dark text-white rounded-b-[4rem] relative z-0 -mt-10 pt-32 shadow-xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-slate-300 mb-16">Get your medicines in 3 simple steps</p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-white/20 -z-10"></div>

            <div className="flex-1 flex flex-col items-center max-w-xs relative">
              <div className="absolute -top-3 -right-3 bg-green-500 w-8 h-8 rounded-full flex items-center justify-center font-bold z-20">1</div>
              <div className="bg-white text-primary p-6 rounded-2xl mb-6 shadow-lg relative z-10">
                <FileText size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Upload Prescription</h3>
              <p className="text-sm text-slate-300">Take a photo or upload your prescription. Our pharmacists will verify it within minutes.</p>
            </div>
            
            <div className="flex-1 flex flex-col items-center max-w-xs relative">
              <div className="absolute -top-3 -right-3 bg-green-500 w-8 h-8 rounded-full flex items-center justify-center font-bold z-20">2</div>
              <div className="bg-white text-primary p-6 rounded-2xl mb-6 shadow-lg relative z-10">
                <Pill size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Browse & Select</h3>
              <p className="text-sm text-slate-300">Choose from 5000+ genuine medicines. Search by name, category, or health condition.</p>
            </div>

            <div className="flex-1 flex flex-col items-center max-w-xs relative">
              <div className="absolute -top-3 -right-3 bg-green-500 w-8 h-8 rounded-full flex items-center justify-center font-bold z-20">3</div>
              <div className="bg-white text-primary p-6 rounded-2xl mb-6 shadow-lg relative z-10">
                <Truck size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Fast Delivery</h3>
              <p className="text-sm text-slate-300">Get your medicines delivered to your doorstep. Track your order in real-time.</p>
            </div>
          </div>
          
          <div className="mt-16">
            <Link to="/upload" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors">
              <FileText size={20} /> Upload Prescription Now
            </Link>
          </div>
        </div>
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-light/50 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary-light/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      </section>

      {/* Shop by Category */}
      <section className="py-20 bg-slate-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-2">Shop by Category</h2>
            <p className="text-slate-500">Find medicines for your specific health needs</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, idx) => {
              const colors = ['bg-orange-100 text-orange-500', 'bg-blue-100 text-blue-500', 'bg-purple-100 text-purple-500', 'bg-yellow-100 text-yellow-600', 'bg-green-100 text-green-500', 'bg-red-100 text-red-500'];
              return <CategoryCard key={category.id} category={category} colorClass={colors[idx % colors.length]} />;
            })}
          </div>
        </div>
      </section>

      {/* Featured Medicines */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-2">Featured Medicines</h2>
              <p className="text-slate-500">Popular products trusted by thousands</p>
            </div>
            <Link to="/medicines" className="text-primary hover:text-primary-dark font-bold hidden sm:flex items-center gap-1">
              View All Products &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {medicines.slice(0, 4).map(medicine => (
              <MedicineCard key={medicine.id} medicine={medicine} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
             <Link to="/medicines" className="text-primary font-bold">View All Products &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Why Choose Jyoti Medical?</h2>
          <p className="text-slate-500 mb-12">We're committed to providing the best healthcare experience</p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             {[
               { icon: <ShieldCheck size={32}/>, title: '100% Genuine Products', desc: 'All medicines are sourced from licensed pharmacies and verified suppliers.', color: 'bg-green-100 text-green-600' },
               { icon: <UserCheck size={32}/>, title: 'Licensed Pharmacists', desc: 'Our team of experienced pharmacists reviews every prescription for accuracy.', color: 'bg-blue-100 text-blue-600' },
               { icon: <Clock size={32}/>, title: 'Quick Delivery', desc: 'Same-day delivery available in select areas. Track your order in real-time.', color: 'bg-purple-100 text-purple-600' },
               { icon: <Headphones size={32}/>, title: '24/7 Support', desc: 'Our customer support team is available round the clock to assist you.', color: 'bg-orange-100 text-orange-600' },
             ].map((feature, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                  <div className={`${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{feature.title}</h3>
                  <p className="text-slate-500 text-sm">{feature.desc}</p>
                </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
