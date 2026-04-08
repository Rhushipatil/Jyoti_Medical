import * as LucideIcons from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CategoryCard({ category, colorClass }) {
  const Icon = LucideIcons[category.icon] || LucideIcons.Pill;
  
  return (
    <Link to={`/medicines?category=${category.name}`} className="block">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all text-center group h-full flex flex-col items-center justify-center">
        <div className={`w-16 h-16 rounded-2xl mb-4 flex items-center justify-center transition-transform group-hover:scale-110 ${colorClass}`}>
          <Icon size={32} />
        </div>
        <h3 className="font-bold text-slate-800 mb-1">{category.name}</h3>
        <p className="text-sm text-slate-500">{category.description}</p>
      </div>
    </Link>
  );
}
