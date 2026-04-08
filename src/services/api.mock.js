export const mockMedicines = [
  // Fever
  { id: 1, name: 'Paracetamol 500mg', category: 'Fever', price: 25, rating: 4.8, type: 'Bestseller', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&q=80', prescription: false, description: 'Strip of 10 tablets. Effective pain relief for fever and mild pain.' },
  { id: 11, name: 'Dolo 650mg', category: 'Fever', price: 30, rating: 4.9, type: 'Popular', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&q=80', prescription: false, description: 'Strip of 15 tablets. Fast acting fever reducer.' },
  { id: 12, name: 'Ibuprofen 400mg', category: 'Fever', price: 45, rating: 4.5, type: '', image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=500&q=80', prescription: false, description: 'Anti-inflammatory medicine for fever and body ache.' },
  { id: 13, name: 'Crocin Advance', category: 'Fever', price: 20, rating: 4.7, type: '', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=500&q=80', prescription: false, description: 'Strip of 15 tablets. Fast absorption paracetamol.' },

  // Cold & Flu
  { id: 5, name: 'Benadryl Cough Syrup', category: 'Cold & Flu', price: 120, rating: 4.5, type: 'Bestseller', image: 'https://images.unsplash.com/photo-1550572017-edb73beeec52?w=500&q=80', prescription: false, description: '150ml bottle for dry and wet cough relief.' },
  { id: 21, name: 'Vicks VapoRub', category: 'Cold & Flu', price: 85, rating: 4.8, type: 'Popular', image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23f8fafc'/><path d='M150 140 Q200 120 250 140 L240 220 Q200 240 160 220 Z' fill='%23059669'/><rect x='160' y='110' width='80' height='30' rx='5' fill='%23047857'/><path d='M150 180 L250 180' stroke='%23fff' stroke-width='4'/></svg>", prescription: false, description: '50g rub for cold and cough relief.' },
  { id: 22, name: 'Cetirizine 10mg', category: 'Cold & Flu', price: 18, rating: 4.6, type: 'Rx', image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=500&q=80', prescription: true, description: 'Antihistamine for allergy and runny nose.' },
  { id: 23, name: 'Honitus Syrup', category: 'Cold & Flu', price: 95, rating: 4.4, type: 'Herbal', image: 'https://images.unsplash.com/photo-1550572017-edb73beeec52?w=500&q=80', prescription: false, description: 'Ayurvedic cough syrup.' },

  // Diabetes
  { id: 6, name: 'Accu-Chek Active', category: 'Diabetes', price: 899, rating: 4.4, type: 'Device', image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23f8fafc'/><rect x='140' y='60' width='120' height='180' rx='20' fill='%23334155'/><rect x='155' y='80' width='90' height='70' rx='5' fill='%23a7f3d0'/><text x='200' y='125' font-family='sans-serif' font-size='32' text-anchor='middle' font-weight='bold' fill='%23064e3b'>98</text><circle cx='200' cy='200' r='20' fill='%2364748b'/><circle cx='200' cy='200' r='10' fill='%2394a3b8'/></svg>", prescription: false, description: 'Accurate blood sugar monitoring device + 10 strips.' },
  { id: 31, name: 'Metformin 500mg', category: 'Diabetes', price: 55, rating: 4.7, type: 'Rx', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=500&q=80', prescription: true, description: 'Oral diabetes medicine helps control blood sugar levels.' },
  { id: 32, name: 'Insulin Syringes', category: 'Diabetes', price: 150, rating: 4.5, type: '', image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23f8fafc'/><rect x='100' y='140' width='160' height='24' rx='4' fill='%23e2e8f0' stroke='%2394a3b8' stroke-width='2'/><rect x='70' y='132' width='30' height='40' rx='4' fill='%230284c7'/><line x1='260' y1='152' x2='320' y2='152' stroke='%2394a3b8' stroke-width='4'/><rect x='40' y='148' width='30' height='8' fill='%2338bdf8'/><line x1='120' y1='140' x2='120' y2='164' stroke='%2394a3b8' stroke-width='2'/><line x1='140' y1='140' x2='140' y2='164' stroke='%2394a3b8' stroke-width='2'/><line x1='160' y1='140' x2='160' y2='164' stroke='%2394a3b8' stroke-width='2'/></svg>", prescription: false, description: 'Pack of 10 disposable sterile syringes.' },
  { id: 33, name: 'SugarFree Gold', category: 'Diabetes', price: 110, rating: 4.8, type: 'Dietary', image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500&q=80', prescription: false, description: 'Pellets for sweetening without calories.' },

  // Pain Relief
  { id: 41, name: 'Volini Spray', category: 'Pain Relief', price: 140, rating: 4.7, type: 'Popular', image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23f8fafc'/><rect x='160' y='100' width='80' height='140' rx='15' fill='%23f97316'/><rect x='175' y='50' width='50' height='50' rx='5' fill='%23fbbf24'/><line x1='160' y1='160' x2='240' y2='160' stroke='%23fff' stroke-width='10'/></svg>", prescription: false, description: 'Joint & muscle pain relief spray.' },
  { id: 42, name: 'Combiflam', category: 'Pain Relief', price: 35, rating: 4.6, type: '', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&q=80', prescription: false, description: 'Pain relief tablets for headache and muscle pain.' },
  { id: 43, name: 'Moov Ointment', category: 'Pain Relief', price: 85, rating: 4.8, type: 'Bestseller', image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23f8fafc'/><path d='M160 80 Q190 60 220 80 L220 220 Q190 240 160 220 Z' fill='%238b5cf6'/><rect x='170' y='50' width='40' height='30' rx='4' fill='%23f1f5f9' stroke='%23cbd5e1' stroke-width='2'/><path d='M160 120 L220 120' stroke='%23fff' stroke-width='4'/><path d='M160 140 L220 140' stroke='%23fff' stroke-width='4'/></svg>", prescription: false, description: 'Fast relief from backache and muscle pain.' },
  { id: 44, name: 'Diclofenac Gel', category: 'Pain Relief', price: 65, rating: 4.5, type: '', image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23f8fafc'/><path d='M160 80 Q190 60 220 80 L220 220 Q190 240 160 220 Z' fill='%230284c7'/><rect x='170' y='50' width='40' height='30' rx='4' fill='%23f1f5f9' stroke='%23cbd5e1' stroke-width='2'/><path d='M160 120 L220 120' stroke='%23fff' stroke-width='4'/><path d='M160 140 L220 140' stroke='%23fff' stroke-width='4'/></svg>", prescription: false, description: 'Topical gel for joint pain.' },

  // Vitamins
  { id: 3, name: 'Vitamin D3 60K', category: 'Vitamins', price: 199, rating: 4.9, type: 'Popular', image: 'https://images.unsplash.com/photo-1550572017-edb73beeec52?w=500&q=80', prescription: false, description: 'Bottle of 30 capsules. Good for bone health.' },
  { id: 51, name: 'Becosules Z', category: 'Vitamins', price: 45, rating: 4.8, type: 'Bestseller', image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500&q=80', prescription: false, description: 'B-Complex forte with Vitamin C and Zinc.' },
  { id: 52, name: 'Shelcal 500', category: 'Vitamins', price: 115, rating: 4.7, type: '', image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=500&q=80', prescription: false, description: 'Calcium and Vitamin D3 supplement.' },
  { id: 53, name: 'Neurobion Forte', category: 'Vitamins', price: 34, rating: 4.6, type: '', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=500&q=80', prescription: false, description: 'Vitamin B12 supplement for nerve health.' },

  // First Aid
  { id: 61, name: 'Savlon Antiseptic Liquid', category: 'First Aid', price: 78, rating: 4.9, type: 'Essential', image: 'https://images.unsplash.com/photo-1550572017-edb73beeec52?w=500&q=80', prescription: false, description: '100ml liquid for wound cleaning.' },
  { id: 62, name: 'Band-Aid Washproof', category: 'First Aid', price: 50, rating: 4.8, type: '', image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23f8fafc'/><rect x='150' y='100' width='100' height='100' rx='10' fill='%23ef4444'/><rect x='185' y='120' width='30' height='60' fill='%23fff'/><rect x='170' y='135' width='60' height='30' fill='%23fff'/></svg>", prescription: false, description: 'Pack of 20 sterile adhesive bandages.' },
  { id: 63, name: 'Absorbent Cotton Roll', category: 'First Aid', price: 45, rating: 4.5, type: '', image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23f8fafc'/><circle cx='200' cy='150' r='60' fill='%23fff' stroke='%23cbd5e1' stroke-width='4'/><path d='M160 120 Q200 100 240 120' stroke='%23e2e8f0' stroke-width='3' fill='none'/><path d='M160 150 Q200 130 240 150' stroke='%23e2e8f0' stroke-width='3' fill='none'/><path d='M160 180 Q200 160 240 180' stroke='%23e2e8f0' stroke-width='3' fill='none'/></svg>", prescription: false, description: '100g surgical cotton roll.' },
  { id: 64, name: 'Betadine Ointment', category: 'First Aid', price: 95, rating: 4.7, type: '', image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23f8fafc'/><path d='M160 80 Q190 60 220 80 L220 220 Q190 240 160 220 Z' fill='%23eab308'/><rect x='170' y='50' width='40' height='30' rx='4' fill='%23f1f5f9' stroke='%23cbd5e1' stroke-width='2'/><path d='M160 120 L220 120' stroke='%23fff' stroke-width='4'/><path d='M160 140 L220 140' stroke='%23fff' stroke-width='4'/></svg>", prescription: false, description: 'Povidone-Iodine ointment for cuts and wounds.' },
  
  // Others / Antibiotics
  { id: 2, name: 'Amoxicillin 500mg', category: 'Antibiotics', price: 89, rating: 4.6, type: 'Rx', image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=500&q=80', prescription: true, description: 'Strip of 10 capsules. Broad-spectrum antibiotic.' },
  { id: 4, name: 'Digital Thermometer', category: 'Devices', price: 399, rating: 4.7, type: '20% OFF', originalPrice: 499, image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23f8fafc'/><rect x='80' y='140' width='200' height='24' rx='12' fill='%23fff' stroke='%23cbd5e1' stroke-width='3'/><rect x='100' y='144' width='70' height='16' fill='%236ee7b7' rx='4'/><circle cx='280' cy='152' r='18' fill='%23fff' stroke='%23cbd5e1' stroke-width='3'/><text x='110' y='156' font-family='sans-serif' font-size='12' font-weight='bold' fill='%23065f46'>98.6°F</text></svg>", prescription: false, description: 'Accurate & Fast Reading thermometer.' },
];

export const mockCategories = [
  { id: 1, name: 'Fever', description: 'Paracetamol, Dolo', icon: 'Thermometer' },
  { id: 2, name: 'Cold & Flu', description: 'Cough, Throat', icon: 'Snowflake' },
  { id: 3, name: 'Diabetes', description: 'Glucometer, Pills', icon: 'Droplet' },
  { id: 4, name: 'Pain Relief', description: 'Body Pain, Headache', icon: 'Bandage' },
  { id: 5, name: 'Vitamins', description: 'Supplements', icon: 'Pill' },
  { id: 6, name: 'First Aid', description: 'Bandages, Sprays', icon: 'Cross' },
];

export const api = {
  getMedicines: () => new Promise((resolve) => setTimeout(() => resolve(mockMedicines), 300)),
  getMedicineById: (id) => new Promise((resolve) => setTimeout(() => resolve(mockMedicines.find(m => m.id === parseInt(id))), 200)),
  getCategories: () => new Promise((resolve) => setTimeout(() => resolve(mockCategories), 200)),
  login: (email, password) => new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email && password.length >= 6) {
        resolve({ user: { name: 'Demo User', email }, token: 'mock-jwt-token' });
      } else {
        reject(new Error('Invalid password or email'));
      }
    }, 500);
  }),
};
