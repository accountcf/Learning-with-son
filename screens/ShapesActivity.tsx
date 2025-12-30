
import React, { useState } from 'react';

interface ShapesActivityProps {
  onBack: () => void;
  onNext: () => void;
}

const ShapesActivity: React.FC<ShapesActivityProps> = ({ onNext }) => {
  const [colors, setColors] = useState<Record<string, string>>({
    roof: 'white',
    body: 'white',
    door: 'white',
    window: 'white'
  });
  const [activeColor, setActiveColor] = useState<string>('#ef4444');
  const [countAnswer, setCountAnswer] = useState<number | null>(null);

  const handleColor = (part: string) => {
    setColors({ ...colors, [part]: activeColor });
  };

  return (
    <div className="max-w-[1200px] mx-auto p-6 md:p-10 flex flex-col gap-8">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-secondary font-black text-sm uppercase">
            <span className="material-symbols-outlined">school</span>
            Bài Học 1
          </div>
          <h1 className="text-3xl md:text-5xl font-black">Thế Giới Hình Khối</h1>
          <p className="text-lg text-gray-500">Giúp kiến trúc sư nhí hoàn thiện ngôi nhà mơ ước nhé!</p>
        </div>
        <div className="w-full md:w-72 bg-white p-4 rounded-3xl shadow-sm border">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-bold">Tiến độ</span>
            <span className="text-sm font-bold text-secondary">25%</span>
          </div>
          <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full w-1/4 bg-secondary shadow-lg"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="relative aspect-[4/3] bg-white rounded-[2rem] shadow-xl border overflow-hidden flex items-center justify-center p-10">
            {/* Background Grid Decoration */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0df20d 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            
            <svg viewBox="0 0 500 400" className="w-full h-full drop-shadow-2xl">
              {/* Roof */}
              <path 
                d="M 250 50 L 100 200 L 400 200 Z" 
                fill={colors.roof} 
                stroke="#1f2937" strokeWidth="6" strokeLinejoin="round"
                className="cursor-pointer hover:opacity-80 transition-all"
                onClick={() => handleColor('roof')}
              />
              {/* Body */}
              <rect 
                x="125" y="200" width="250" height="150" 
                fill={colors.body} 
                stroke="#1f2937" strokeWidth="6" strokeLinejoin="round"
                className="cursor-pointer hover:opacity-80 transition-all"
                onClick={() => handleColor('body')}
              />
              {/* Door */}
              <rect 
                x="220" y="270" width="60" height="80" 
                fill={colors.door} 
                stroke="#1f2937" strokeWidth="6" strokeLinejoin="round"
                className="cursor-pointer hover:opacity-80 transition-all"
                onClick={() => handleColor('door')}
              />
              {/* Window */}
              <circle 
                cx="250" cy="240" r="25" 
                fill={colors.window} 
                stroke="#1f2937" strokeWidth="6"
                className="cursor-pointer hover:opacity-80 transition-all"
                onClick={() => handleColor('window')}
              />
            </svg>

            {/* Floating Palette */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-2xl border flex gap-4">
              {['#ef4444', '#fbbf24', '#3b82f6'].map(c => (
                <button 
                  key={c}
                  onClick={() => setActiveColor(c)}
                  className={`size-12 rounded-full shadow-lg transition-transform active:scale-90 border-4 ${activeColor === c ? 'border-gray-800 scale-110' : 'border-white'}`}
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>

          <div className="bg-secondary/10 border border-secondary/20 rounded-2xl p-4 flex items-center gap-3 animate-pulse">
            <span className="material-symbols-outlined text-secondary text-3xl">lightbulb</span>
            <p className="font-bold text-secondary-dark">Mẹo nhỏ: Nhấp vào một màu bên dưới rồi nhấp vào hình khối để tô màu nhé!</p>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-white p-8 rounded-[2rem] shadow-xl border space-y-8">
            <h3 className="text-xl font-black flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">assignment</span>
              Nhiệm vụ của bé
            </h3>

            <div className="space-y-4">
              {[
                { label: 'Tô màu Đỏ', sub: 'Mái nhà (Tam giác)', color: 'bg-red-500', isDone: colors.roof === '#ef4444' },
                { label: 'Tô màu Vàng', sub: 'Thân nhà (Vuông)', color: 'bg-yellow-400', isDone: colors.body === '#fbbf24' },
                { label: 'Tô màu Xanh', sub: 'Cửa (Chữ nhật)', color: 'bg-blue-500', isDone: colors.door === '#3b82f6' },
              ].map((task, i) => (
                <div key={i} className={`flex items-center gap-4 p-3 rounded-2xl transition-colors ${task.isDone ? 'bg-secondary/5' : 'hover:bg-gray-50'}`}>
                  <div className={`size-10 rounded-full ${task.color} flex items-center justify-center text-white shadow-sm`}>
                    <span className="material-symbols-outlined text-xl">brush</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-black text-sm">{task.label}</p>
                    <p className="text-xs text-gray-400 font-medium">{task.sub}</p>
                  </div>
                  <span className={`material-symbols-outlined ${task.isDone ? 'text-secondary font-black' : 'text-gray-200'}`}>
                    {task.isDone ? 'check_circle' : 'circle'}
                  </span>
                </div>
              ))}

              <div className="pt-4 border-t space-y-3">
                <p className="font-black flex items-center gap-2">
                  <span className="material-symbols-outlined text-purple-500">123</span>
                  Đếm số hình tròn?
                </p>
                <div className="flex gap-2">
                  {[1, 2, 3].map(n => (
                    <button 
                      key={n}
                      onClick={() => setCountAnswer(n)}
                      className={`flex-1 py-3 rounded-xl border-2 font-black text-xl transition-all ${countAnswer === n ? 'border-secondary bg-secondary/10 text-secondary' : 'border-gray-100 hover:border-secondary/30'}`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="py-4 rounded-full border-2 font-black text-gray-400 hover:text-gray-600 transition-colors">Làm lại</button>
            <button onClick={onNext} className="py-4 rounded-full bg-secondary text-white font-black shadow-lg shadow-secondary/20 hover:brightness-110 transition-all">Hoàn thành</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShapesActivity;
