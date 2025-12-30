
import React, { useState } from 'react';
import { ComparisonPair } from '../types';

interface ComparisonActivityProps {
  onBack: () => void;
  onNext: () => void;
}

const PAIRS: ComparisonPair[] = [
  {
    id: 1,
    tallImg: 'https://picsum.photos/seed/giraffe/200/400',
    shortImg: 'https://picsum.photos/seed/rabbit/200/150',
    tallAlt: 'Hươu cao cổ',
    shortAlt: 'Con thỏ',
    category: 'CẶP 1',
    icon: 'nature'
  },
  {
    id: 2,
    tallImg: 'https://picsum.photos/seed/pinetree/200/400',
    shortImg: 'https://picsum.photos/seed/mushroom/200/100',
    tallAlt: 'Cây thông',
    shortAlt: 'Cây nấm',
    category: 'CẶP 2',
    icon: 'forest'
  },
  {
    id: 3,
    tallImg: 'https://picsum.photos/seed/skyscraper/200/400',
    shortImg: 'https://picsum.photos/seed/house/200/150',
    tallAlt: 'Tòa nhà cao tầng',
    shortAlt: 'Ngôi nhà nhỏ',
    category: 'CẶP 3',
    icon: 'location_city'
  }
];

const ComparisonActivity: React.FC<ComparisonActivityProps> = ({ onNext }) => {
  const [selections, setSelections] = useState<Record<string, 'TALL' | 'SHORT' | null>>({});

  const toggleSelection = (pairId: number, itemType: 'L' | 'R', choice: 'TALL' | 'SHORT') => {
    const key = `${pairId}-${itemType}`;
    setSelections({ ...selections, [key]: selections[key] === choice ? null : choice });
  };

  return (
    <div className="max-w-[1200px] mx-auto p-6 md:p-10 flex flex-col gap-10">
      <div className="flex flex-col gap-4 text-center md:text-left">
        <span className="inline-block bg-primary/20 text-primary-dark px-4 py-1 rounded-full text-sm font-black uppercase tracking-widest w-fit mx-auto md:mx-0">
          Toán học vui
        </span>
        <h1 className="text-3xl md:text-5xl font-black tracking-tight">Ai Cao Hơn, Ai Thấp Hơn?</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto md:mx-0">
          Bé hãy quan sát kỹ nhé! <span className="font-bold text-primary">Khoanh tròn</span> vào hình cao hơn và đánh dấu <span className="font-bold text-red-500">X</span> vào hình thấp hơn.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PAIRS.map((pair) => (
          <div key={pair.id} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col gap-8 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center border-b pb-4">
              <span className="font-black text-gray-300 tracking-widest text-sm">{pair.category}</span>
              <span className="material-symbols-outlined text-gray-200">{pair.icon}</span>
            </div>

            <div className="flex items-end justify-center h-56 gap-4">
              {/* Item Left (Usually Tall for variation we can swap, but here let's keep it simple) */}
              <div className="flex-1 flex flex-col items-center gap-4 group">
                <div className={`w-full h-44 rounded-2xl bg-orange-50 relative overflow-hidden transition-transform group-hover:scale-105`}>
                  <img src={pair.tallImg} alt={pair.tallAlt} className="w-full h-full object-contain p-2" />
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => toggleSelection(pair.id, 'L', 'TALL')}
                    className={`size-10 rounded-full border-2 flex items-center justify-center transition-all ${selections[`${pair.id}-L`] === 'TALL' ? 'bg-primary border-primary text-white shadow-lg' : 'border-primary/20 text-primary/30 hover:border-primary'}`}
                  >
                    <span className="material-symbols-outlined">radio_button_unchecked</span>
                  </button>
                  <button 
                    onClick={() => toggleSelection(pair.id, 'L', 'SHORT')}
                    className={`size-10 rounded-full border-2 flex items-center justify-center transition-all ${selections[`${pair.id}-L`] === 'SHORT' ? 'bg-red-500 border-red-500 text-white shadow-lg' : 'border-red-200 text-red-200 hover:border-red-500 hover:text-red-500'}`}
                  >
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </div>
              </div>

              {/* Item Right */}
              <div className="flex-1 flex flex-col items-center gap-4 group">
                <div className={`w-full h-24 rounded-2xl bg-blue-50 relative overflow-hidden transition-transform group-hover:scale-105`}>
                  <img src={pair.shortImg} alt={pair.shortAlt} className="w-full h-full object-contain p-2" />
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => toggleSelection(pair.id, 'R', 'TALL')}
                    className={`size-10 rounded-full border-2 flex items-center justify-center transition-all ${selections[`${pair.id}-R`] === 'TALL' ? 'bg-primary border-primary text-white shadow-lg' : 'border-primary/20 text-primary/30 hover:border-primary'}`}
                  >
                    <span className="material-symbols-outlined">radio_button_unchecked</span>
                  </button>
                  <button 
                    onClick={() => toggleSelection(pair.id, 'R', 'SHORT')}
                    className={`size-10 rounded-full border-2 flex items-center justify-center transition-all ${selections[`${pair.id}-R`] === 'SHORT' ? 'bg-red-500 border-red-500 text-white shadow-lg' : 'border-red-200 text-red-200 hover:border-red-500 hover:text-red-500'}`}
                  >
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center pt-10">
        <button 
          onClick={onNext}
          className="bg-primary hover:bg-yellow-500 text-white text-xl font-black py-4 px-12 rounded-full shadow-xl transform active:scale-95 transition-all flex items-center gap-2"
        >
          <span className="material-symbols-outlined">check_circle</span>
          Hoàn thành
        </button>
      </div>
    </div>
  );
};

export default ComparisonActivity;
