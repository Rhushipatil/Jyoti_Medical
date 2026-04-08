import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { api } from '../services/api.mock';
import MedicineCard from '../components/MedicineCard';
import { Search, Filter } from 'lucide-react';

export default function Medicines() {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  
  const [medicines, setMedicines] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    api.getMedicines().then(data => {
      if (categoryFilter) {
        setMedicines(data.filter(m => m.category === categoryFilter));
      } else {
        setMedicines(data);
      }
    });
  }, [categoryFilter]);

  const filteredMedicines = medicines.filter(m => m.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">{categoryFilter ? `${categoryFilter} Medicines` : 'All Medicines'}</h1>
          <p className="text-slate-500">Find the right medication for your health needs</p>
        </div>
        
        <div className="flex w-full md:w-auto gap-4">
          <div className="relative w-full md:w-80">
            <input 
              type="text" 
              placeholder="Search medicines..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
            />
            <Search className="absolute left-3 top-2.5 text-slate-400" size={20} />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
            <Filter size={20} />
            <span className="hidden md:inline">Filters</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredMedicines.length > 0 ? (
          filteredMedicines.map(medicine => (
            <MedicineCard key={medicine.id} medicine={medicine} />
          ))
        ) : (
          <div className="col-span-full text-center py-20 text-slate-500">
            <p className="text-xl">No medicines found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
