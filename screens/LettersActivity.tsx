
import React, { useState } from 'react';

interface LettersActivityProps {
  onBack: () => void;
  onNext: () => void;
}

const LettersActivity: React.FC<LettersActivityProps> = ({ onNext }) => {
  const [activeTab, setActiveTab] = useState<'A' | 'B'>('A');

  const content = {
    A: {
      title: 'Chữ A và Con Cá',
      desc: 'Con cá vàng bơi trong bể nước.',
      img: 'https://picsum.photos/seed/fish/200/200',
      color: 'bg-orange-50',
      stroke: '#f46a25',
      letter: 'a',
      word: 'Cá'
    },
    B: {
      title: 'Chữ B và Con Bò',
      desc: 'Chú bò sữa trên cánh đồng xanh.',
      img: 'https://picsum.photos/seed/cow/200/200',
      color: 'bg-blue-50',
      stroke: '#3b82f6',
      letter: 'b',
      word: 'Bò'
    }
  };

  const current = content[activeTab];

  return (
    <div className="max-w-[960px] mx-auto p-6 flex flex-col gap-8 animate-fade-in">
      <div className="bg-white p-8 rounded-3xl shadow-sm border flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-black uppercase">Bài 1</span>
            <span className="text-gray-400 text-xs font-bold uppercase">Tiếng Việt Lớp 1</span>
          </div>
          <h1 className="text-4xl font-black">Truy Tìm Chữ Cái</h1>
          <p className="text-gray-500 font-medium">Chữ <strong className="text-primary">{activeTab}</strong> đang trốn trong tranh, hãy tìm xem!</p>
        </div>
        <div className="size-24 rounded-full bg-orange-100 flex items-center justify-center text-primary animate-pulse">
           <span className="material-symbols-outlined !text-5xl">search</span>
        </div>
      </div>

      <div className="bg-white p-2 rounded-full shadow-md border flex items-center justify-between px-6">
        <div className="flex gap-4">
          <button onClick={() => setActiveTab('A')} className={`px-6 py-2 rounded-full font-black transition-all ${activeTab === 'A' ? 'bg-primary text-white shadow-lg' : 'hover:bg-gray-50'}`}>Chữ A</button>
          <button onClick={() => setActiveTab('B')} className={`px-6 py-2 rounded-full font-black transition-all ${activeTab === 'B' ? 'bg-primary text-white shadow-lg' : 'hover:bg-gray-50'}`}>Chữ B</button>
        </div>
        <button onClick={onNext} className="bg-green-500 text-white px-8 py-2 rounded-full font-black shadow-lg flex items-center gap-2">
          <span className="material-symbols-outlined">check_circle</span>
          Hoàn thành
        </button>
      </div>

      <section className="bg-white rounded-[2rem] shadow-xl border p-8 flex flex-col gap-10 relative overflow-hidden">
        <div className={`absolute top-0 left-0 w-2 h-full ${activeTab === 'A' ? 'bg-primary' : 'bg-blue-500'}`} />
        
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-black">{current.title}</h2>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-xs font-bold border flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">palette</span> Tô màu
            </span>
            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold border flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">edit_note</span> Tập viết
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-6">
            <div className={`aspect-[4/3] ${current.color} rounded-3xl border-4 border-dashed border-gray-100 flex items-center justify-center p-8 group cursor-pointer hover:bg-white transition-all shadow-inner`}>
               <svg viewBox="0 0 100 100" className="w-48 h-48 drop-shadow-xl transition-transform group-hover:scale-110">
                  <text 
                    x="50" y="70" 
                    textAnchor="middle" 
                    className="font-black" 
                    style={{ fontSize: 80, fill: 'none', stroke: current.stroke, strokeWidth: 2 }}
                  >
                    {activeTab}
                  </text>
               </svg>
            </div>
            
            <div className="bg-white p-6 rounded-3xl border shadow-sm flex items-center gap-6">
              <div className="size-20 rounded-full border overflow-hidden shadow-sm">
                <img src={current.img} alt={current.word} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <h3 className="text-4xl font-black text-primary mb-1">{current.word}</h3>
                <p className="text-gray-400 font-medium">{current.desc}</p>
              </div>
              <button className="size-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                <span className="material-symbols-outlined">volume_up</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
             <div className="flex items-center gap-2 text-gray-400 font-black text-sm uppercase">
               <span className="material-symbols-outlined">border_color</span>
               Đồ theo nét chấm mờ
             </div>
             <div className="bg-white border-2 rounded-3xl p-8 relative min-h-[300px] shadow-inner overflow-hidden">
                {/* Notebook paper background */}
                <div className="absolute inset-0 flex flex-col pt-10 px-8 gap-16 pointer-events-none opacity-20">
                   {[1,2,3].map(i => (
                     <div key={i} className="w-full h-10 border-y border-blue-400 border-dashed relative">
                        <div className="absolute top-1/2 w-full h-px bg-red-300"></div>
                     </div>
                   ))}
                </div>

                <div className="relative z-10 flex flex-col gap-14">
                  {[1,2,3].map(row => (
                    <div key={row} className="flex justify-around items-center">
                       {[1,2,3,4].map(col => (
                         <span key={col} className={`text-6xl font-medium text-gray-200 cursor-crosshair hover:text-primary transition-colors select-none ${row > 1 ? 'opacity-50' : ''}`}>
                           {current.letter}
                         </span>
                       ))}
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LettersActivity;
