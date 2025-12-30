
import React, { useState } from 'react';

interface BalloonsActivityProps {
  onBack: () => void;
  onNext: () => void;
}

const BalloonsActivity: React.FC<BalloonsActivityProps> = ({ onBack, onNext }) => {
  const [selectedColor, setSelectedColor] = useState<'RED' | 'BLUE'>('RED');
  const [balloonColors, setBalloonColors] = useState<Record<number, string>>({});
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const balloons = [
    { id: 1, size: 40, x: 20, y: 30, color: '#ff6b6b' },
    { id: 2, size: 60, x: 40, y: 15, color: '#feca57' },
    { id: 3, size: 90, x: 50, y: 40, color: '#48dbfb' }, // To nhất
    { id: 4, size: 30, x: 70, y: 35, color: '#ff9ff3' }, // Nhỏ nhất
    { id: 5, size: 55, x: 15, y: 60, color: '#1dd1a1' },
    { id: 6, size: 50, x: 75, y: 10, color: '#5f27cd' },
  ];

  const handleBalloonClick = (id: number) => {
    setBalloonColors({ ...balloonColors, [id]: selectedColor === 'RED' ? '#ef4444' : '#2563eb' });
  };

  const handleInputChange = (idx: number, val: string) => {
    setAnswers({ ...answers, [idx]: val });
  };

  return (
    <div className="max-w-[960px] mx-auto p-6 flex flex-col gap-8">
      {/* Instructions */}
      <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1">
          <h2 className="text-xl font-black mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">school</span>
            Hướng dẫn bé làm bài
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-600 font-medium">
            <li>Đếm xem có bao nhiêu quả bóng bay trong hình.</li>
            <li>Điền các số còn thiếu vào dãy số bên dưới.</li>
            <li>Tô màu quả bóng <strong>TO NHẤT (Đỏ)</strong> và <strong>NHỎ NHẤT (Xanh)</strong>.</li>
          </ol>
        </div>
        <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl">
           <div className="flex flex-col items-center gap-1">
             <div className="size-8 rounded-full bg-red-500 shadow-sm border-2 border-white"></div>
             <span className="text-[10px] font-bold">To nhất</span>
           </div>
           <span className="material-symbols-outlined text-gray-300">arrow_forward</span>
           <div className="flex flex-col items-center gap-1">
             <div className="size-8 rounded-full bg-blue-600 shadow-sm border-2 border-white"></div>
             <span className="text-[10px] font-bold">Nhỏ nhất</span>
           </div>
        </div>
      </div>

      {/* Activity 1: Visual Coloring */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-black flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">toys</span>
            1. Khu Vườn Bóng Bay
          </h3>
          <div className="flex gap-2 bg-white p-2 rounded-full border shadow-sm">
            <button 
              onClick={() => setSelectedColor('RED')}
              className={`size-10 rounded-full bg-red-500 border-4 transition-all ${selectedColor === 'RED' ? 'border-gray-800 scale-110' : 'border-transparent'}`}
            />
            <button 
              onClick={() => setSelectedColor('BLUE')}
              className={`size-10 rounded-full bg-blue-600 border-4 transition-all ${selectedColor === 'BLUE' ? 'border-gray-800 scale-110' : 'border-transparent'}`}
            />
          </div>
        </div>

        <div className="relative aspect-[16/9] bg-sky-100 rounded-[2rem] overflow-hidden border-4 border-white shadow-md cursor-crosshair">
          <div className="absolute top-4 right-4 bg-white/80 px-4 py-1 rounded-full text-xs font-bold text-primary animate-pulse z-10">
            Click vào bóng để tô màu!
          </div>
          <svg viewBox="0 0 100 56" className="w-full h-full">
            <defs>
              <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#bae6fd" />
                <stop offset="100%" stopColor="#7dd3fc" />
              </linearGradient>
            </defs>
            <rect width="100" height="56" fill="url(#skyGradient)" />
            
            {balloons.map(b => (
              <g key={b.id} onClick={() => handleBalloonClick(b.id)} className="cursor-pointer transition-transform hover:scale-105 active:scale-95">
                {/* String */}
                <path d={`M ${b.x} ${b.y + b.size/20} Q ${b.x + 2} ${b.y + 30} 50 56`} stroke="#475569" strokeWidth="0.2" fill="none" />
                {/* Balloon Body */}
                <ellipse 
                  cx={b.x} cy={b.y} 
                  rx={b.size / 20} ry={b.size / 15} 
                  fill={balloonColors[b.id] || b.color} 
                  className="shadow-sm"
                />
                <circle cx={b.x - b.size/60} cy={b.y - b.size/30} r={b.size/60} fill="white" fillOpacity="0.3" />
              </g>
            ))}
          </svg>
        </div>
      </section>

      {/* Activity 2: Number Sequence */}
      <section className="space-y-4">
        <h3 className="text-2xl font-black flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">filter_1</span>
          2. Điền số còn thiếu
        </h3>
        <div className="bg-white p-8 rounded-3xl border shadow-sm">
          <div className="flex flex-wrap justify-center gap-4">
            {[1, 2, '?', 4, 5, '?', 7, 8, '?', 10, 11, '?', 13, 14, '?', 16, '?', 18, 19, '?'].map((num, idx) => (
              <div key={idx} className="relative size-12 md:size-16">
                {num === '?' ? (
                  <input 
                    type="number"
                    placeholder="?"
                    value={answers[idx] || ''}
                    onChange={(e) => handleInputChange(idx, e.target.value)}
                    className="w-full h-full rounded-full border-2 border-dashed border-gray-300 text-center text-xl font-black focus:border-solid focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all placeholder-gray-300"
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-primary/20 text-primary flex items-center justify-center text-xl font-black">
                    {num}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex justify-center pt-8 pb-12">
        <button 
          onClick={onNext}
          className="bg-primary hover:bg-yellow-500 text-white text-xl font-black py-4 px-12 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-3"
        >
          <span className="material-symbols-outlined font-bold">check_circle</span>
          Kiểm Tra Kết Quả
        </button>
      </div>
    </div>
  );
};

export default BalloonsActivity;
