
import React, { useState } from 'react';

interface FeedbackScreenProps {
  onHome: () => void;
}

const FeedbackScreen: React.FC<FeedbackScreenProps> = ({ onHome }) => {
  const [selectedEmoji, setSelectedEmoji] = useState<number | null>(null);

  const emojis = [
    { id: 1, label: 'Rất vui', url: 'https://picsum.photos/seed/happy/200/200', color: 'bg-yellow-400' },
    { id: 2, label: 'Bình thường', url: 'https://picsum.photos/seed/neutral/200/200', color: 'bg-blue-400' },
    { id: 3, label: 'Hơi khó', url: 'https://picsum.photos/seed/sweat/200/200', color: 'bg-orange-400' }
  ];

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-20 left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative z-10 w-full max-w-4xl text-center flex flex-col items-center gap-12">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
            Hôm nay con thấy bài học thế nào?
          </h1>
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-white rounded-full shadow-sm border">
            <span className="material-symbols-outlined text-primary">palette</span>
            <p className="text-lg text-gray-500 font-medium">Hãy chọn khuôn mặt con thích nhất nhé!</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
          {emojis.map((e) => (
            <div 
              key={e.id}
              onClick={() => setSelectedEmoji(e.id)}
              className="group flex flex-col items-center gap-6 cursor-pointer"
            >
              <div className="relative size-56">
                <div className={`absolute inset-0 ${e.color} rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity`}></div>
                <div className={`relative size-full bg-white rounded-full shadow-lg border-8 border-dashed transition-all p-4 ${selectedEmoji === e.id ? 'border-primary border-solid scale-110 shadow-2xl' : 'border-gray-100 group-hover:border-primary/50'}`}>
                  <img src={e.url} alt={e.label} className={`size-full object-cover rounded-full transition-all ${selectedEmoji === e.id ? 'grayscale-0 opacity-100' : 'grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80'}`} />
                  
                  {selectedEmoji === e.id && (
                    <div className="absolute top-0 right-0 size-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg animate-bounce">
                      <span className="material-symbols-outlined font-black">check</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="text-center">
                <h3 className={`text-2xl font-black mb-1 transition-colors ${selectedEmoji === e.id ? 'text-primary' : 'text-gray-400'}`}>{e.label}</h3>
                <div className={`h-1.5 w-12 rounded-full mx-auto transition-colors ${selectedEmoji === e.id ? 'bg-primary' : 'bg-gray-100'}`}></div>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={onHome}
          className="group relative flex items-center justify-center min-w-[280px] h-16 bg-primary hover:bg-yellow-500 text-white text-xl font-black rounded-full shadow-xl hover:shadow-2xl hover:shadow-primary/30 transition-all active:scale-95 overflow-hidden"
        >
          <span className="mr-3">Gửi kết quả</span>
          <span className="material-symbols-outlined text-2xl group-hover:translate-x-2 transition-transform">send</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </button>
      </div>
    </div>
  );
};

export default FeedbackScreen;
