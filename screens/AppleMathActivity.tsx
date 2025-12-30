
import React, { useState } from 'react';

interface AppleMathActivityProps {
  onBack: () => void;
  onNext: () => void;
}

const AppleMathActivity: React.FC<AppleMathActivityProps> = ({ onNext }) => {
  const [ans1, setAns1] = useState<string>('');
  const [ans2, setAns2] = useState<string>('');

  return (
    <div className="max-w-[1000px] mx-auto p-6 md:p-10 flex flex-col gap-10">
      <div className="text-center space-y-4">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary-dark text-sm font-black">
          <span className="material-symbols-outlined">school</span>
          Toán Lớp 1
        </span>
        <h1 className="text-4xl md:text-6xl font-black">Phép Cộng và Trừ</h1>
        <p className="text-xl text-gray-500 font-medium">Con hãy vẽ thêm táo hoặc viết số vào ô trống nhé!</p>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-xl p-8 md:p-12 space-y-12 border relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

        {/* Prob 1 */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-6 rounded-3xl bg-gray-50 border border-transparent hover:border-secondary/20 transition-all relative">
          <span className="absolute left-6 top-6 text-xs font-black text-gray-300">CÂU 1</span>
          
          <div className="flex flex-col items-center gap-4">
            <div className="w-36 h-28 bg-white rounded-2xl border shadow-sm flex items-center justify-center p-4">
              <img src="https://picsum.photos/seed/2apples/150/100" alt="2 apples" className="object-contain" />
            </div>
            <span className="text-3xl font-black text-secondary">2</span>
          </div>

          <div className="size-14 bg-secondary/20 rounded-full flex items-center justify-center text-secondary text-4xl font-black">+</div>

          <div className="flex flex-col items-center gap-4">
            <div className="w-36 h-28 bg-white rounded-2xl border shadow-sm flex items-center justify-center p-4">
              <img src="https://picsum.photos/seed/1apple/150/100" alt="1 apple" className="object-contain" />
            </div>
            <span className="text-3xl font-black text-secondary">1</span>
          </div>

          <div className="text-4xl font-black text-gray-300">=</div>

          <div className="flex flex-col items-center gap-3">
             <input 
              type="number" 
              placeholder="?"
              value={ans1}
              onChange={(e) => setAns1(e.target.value)}
              className="w-44 h-32 rounded-3xl border-4 border-dashed border-gray-200 bg-white text-center text-5xl font-black focus:border-secondary focus:ring-0 transition-all placeholder-gray-100"
             />
             <span className="text-sm font-bold text-gray-300 uppercase">Viết kết quả</span>
          </div>
        </div>

        {/* Prob 2 */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-6 rounded-3xl bg-gray-50 border border-transparent hover:border-secondary/20 transition-all relative">
          <span className="absolute left-6 top-6 text-xs font-black text-gray-300">CÂU 2</span>
          
          <div className="flex flex-col items-center gap-4">
            <div className="w-36 h-28 bg-white rounded-2xl border shadow-sm flex items-center justify-center p-4">
              <img src="https://picsum.photos/seed/4apples/150/100" alt="4 apples" className="object-contain" />
            </div>
            <span className="text-3xl font-black text-secondary">4</span>
          </div>

          <div className="size-14 bg-red-100 rounded-full flex items-center justify-center text-red-500 text-4xl font-black">-</div>

          <div className="flex flex-col items-center gap-4 relative">
            <div className="w-36 h-28 bg-white rounded-2xl border shadow-sm flex items-center justify-center p-4 opacity-50 grayscale">
              <img src="https://picsum.photos/seed/2apples2/150/100" alt="2 apples" className="object-contain" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <span className="material-symbols-outlined !text-[80px] text-red-600/50 font-black">close</span>
              </div>
            </div>
            <span className="text-3xl font-black text-gray-300">2</span>
          </div>

          <div className="text-4xl font-black text-gray-300">=</div>

          <div className="flex flex-col items-center gap-3">
             <input 
              type="number" 
              placeholder="?"
              value={ans2}
              onChange={(e) => setAns2(e.target.value)}
              className="w-44 h-32 rounded-3xl border-4 border-dashed border-gray-200 bg-white text-center text-5xl font-black focus:border-secondary focus:ring-0 transition-all placeholder-gray-100"
             />
             <span className="text-sm font-bold text-gray-300 uppercase">Viết kết quả</span>
          </div>
        </div>

        <div className="flex justify-center pt-6 gap-6">
          <button className="px-10 py-4 rounded-full bg-gray-100 font-black text-gray-400 hover:bg-gray-200 transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined">refresh</span>
            Làm lại
          </button>
          <button onClick={onNext} className="px-16 py-4 rounded-full bg-secondary text-white font-black text-xl shadow-lg shadow-secondary/30 hover:brightness-110 transition-all flex items-center gap-2">
            <span className="material-symbols-outlined">check_circle</span>
            Kiểm tra
          </button>
        </div>
      </div>

      <div className="bg-amber-50 rounded-3xl p-6 border border-amber-100 flex gap-4">
        <div className="size-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 shrink-0">
          <span className="material-symbols-outlined">lightbulb</span>
        </div>
        <div>
          <h4 className="font-black text-amber-800 text-lg">Mách nhỏ Ba Mẹ</h4>
          <p className="text-amber-700/80 font-medium leading-relaxed">Hãy dùng táo thật hoặc đồ chơi để bé tập đếm trực quan tại nhà nhé! Việc cầm nắm vật thật sẽ giúp bé hiểu bản chất phép tính nhanh hơn.</p>
        </div>
      </div>
    </div>
  );
};

export default AppleMathActivity;
