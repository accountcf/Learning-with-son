
import React, { useRef, useEffect, useState } from 'react';

interface TracingActivityProps {
  onBack: () => void;
  onNext: () => void;
}

const TracingActivity: React.FC<TracingActivityProps> = ({ onNext }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [points, setPoints] = useState<number>(0);

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDrawing(true);
    draw(e);
  };

  const endDrawing = () => {
    setIsDrawing(false);
    setPoints(prev => prev + 1);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = ('touches' in e ? e.touches[0].clientX : e.clientX) - rect.left;
    const y = ('touches' in e ? e.touches[0].clientY : e.clientY) - rect.top;

    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#25aff4';

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
  }, []);

  return (
    <div className="max-w-[1024px] mx-auto p-6 md:p-10 flex flex-col items-center gap-8">
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-black mb-2">Luyện Nét: Mưa Rơi</h1>
        <p className="text-lg text-gray-500 font-medium">Bé hãy dùng bút nối các đám mây với bông hoa nhé!</p>
      </div>

      <div className="sticky top-2 z-40 bg-white p-2 rounded-full shadow-2xl border flex gap-2">
        <button className="px-6 h-12 bg-accent rounded-full text-white font-black flex items-center gap-2">
          <span className="material-symbols-outlined">edit</span>
          Bút Chì
        </button>
        <button className="px-6 h-12 hover:bg-gray-100 rounded-full font-black flex items-center gap-2 transition-colors">
          <span className="material-symbols-outlined">ink_eraser</span>
          Tẩy
        </button>
        <div className="w-px bg-gray-100 h-8 my-auto mx-2" />
        <button 
          onClick={() => {
            const ctx = canvasRef.current?.getContext('2d');
            if (ctx && canvasRef.current) ctx.clearRect(0,0, canvasRef.current.width, canvasRef.current.height);
            setPoints(0);
          }}
          className="px-6 h-12 hover:bg-gray-100 rounded-full font-black flex items-center gap-2 transition-colors"
        >
          <span className="material-symbols-outlined">replay</span>
          Làm lại
        </button>
      </div>

      <div className="w-full relative bg-white rounded-[2.5rem] shadow-xl border-8 border-gray-50 overflow-hidden cursor-crosshair">
        {/* Paper Background Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '100% 3rem' }}></div>
        <div className="absolute left-16 top-0 bottom-0 w-1 border-r-2 border-red-300/30"></div>

        <div className="relative z-10 p-10 h-[500px]">
          <div className="grid grid-cols-4 h-full">
            {[
              { cloud: 'https://picsum.photos/seed/c1/100/100', flower: 'https://picsum.photos/seed/f1/100/100', type: 'vertical' },
              { cloud: 'https://picsum.photos/seed/c2/100/100', flower: 'https://picsum.photos/seed/f2/100/100', type: 'diag-right' },
              { cloud: 'https://picsum.photos/seed/c3/100/100', flower: 'https://picsum.photos/seed/f3/100/100', type: 'diag-left' },
              { cloud: 'https://picsum.photos/seed/c4/100/100', flower: 'https://picsum.photos/seed/f4/100/100', type: 'vertical' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col justify-between items-center relative">
                <img src={item.cloud} alt="cloud" className="size-24 object-contain balloon-float" />
                
                {/* Visual Dotted Guide Line */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <svg className="h-full w-full">
                     <line 
                      x1={i === 1 ? '30%' : i === 2 ? '70%' : '50%'} 
                      y1="20%" 
                      x2={i === 1 ? '70%' : i === 2 ? '30%' : '50%'} 
                      y2="80%" 
                      stroke="#cbd5e1" strokeWidth="6" strokeDasharray="12 12" 
                    />
                  </svg>
                </div>

                <img src={item.flower} alt="flower" className="size-24 object-contain transition-transform hover:scale-110" />
              </div>
            ))}
          </div>

          <canvas 
            ref={canvasRef}
            className="absolute inset-0 z-20"
            onMouseDown={startDrawing}
            onMouseUp={endDrawing}
            onMouseMove={draw}
            onTouchStart={startDrawing}
            onTouchEnd={endDrawing}
            onTouchMove={draw}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 w-full">
         <div className="flex-1 bg-white p-6 rounded-3xl border shadow-sm flex items-start gap-4">
            <div className="size-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
               <span className="material-symbols-outlined">info</span>
            </div>
            <div>
               <h4 className="font-black text-lg">Hướng dẫn phụ huynh</h4>
               <p className="text-gray-500 font-medium">Khuyến khích bé giữ chuột và kéo từ đám mây xuống bông hoa theo đường nét đứt. Giúp bé luyện vận động tinh nhé!</p>
            </div>
         </div>
         <div className="flex-1 bg-white p-6 rounded-3xl border shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-4">
               <div className="size-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">
                  <span className="material-symbols-outlined">emoji_events</span>
               </div>
               <div>
                  <h4 className="font-black text-lg">Tiến độ</h4>
                  <p className="text-gray-500 font-medium">Đã nối được {Math.min(points, 4)}/4</p>
               </div>
            </div>
            <button 
              onClick={onNext}
              className="px-8 py-3 bg-accent text-white font-black rounded-full shadow-lg hover:brightness-110 transition-all"
            >
              Tiếp tục
            </button>
         </div>
      </div>
    </div>
  );
};

export default TracingActivity;
