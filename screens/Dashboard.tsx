import React from 'react';
import { ScreenType, Lesson } from '../types.ts';

interface DashboardProps {
  lessons: Lesson[];
  onSelect: (id: ScreenType) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ lessons, onSelect }) => {
  return (
    <div className="max-w-6xl mx-auto p-6 md:p-10 animate-fade-in">
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">Xin chào, Bé yêu! 👋</h1>
        <p className="text-lg text-gray-500 font-medium">Hôm nay bé muốn cùng học điều gì nào?</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map((lesson) => (
          <div 
            key={lesson.id}
            onClick={() => onSelect(lesson.id)}
            className="group relative bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer overflow-hidden"
          >
            <div className={`size-16 ${lesson.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
              <span className="material-symbols-outlined text-4xl leading-none">{lesson.icon}</span>
            </div>
            
            <h3 className="text-2xl font-black mb-2">{lesson.title}</h3>
            <p className="text-gray-500 font-medium">{lesson.description}</p>
            
            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="size-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-800">
                <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-primary/10 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 border border-primary/20">
        <div className="size-32 bg-white rounded-full flex items-center justify-center text-primary shadow-inner">
          <span className="material-symbols-outlined !text-[80px]">emoji_events</span>
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-black mb-2">Chặng đường học tập</h2>
          <p className="text-gray-600 font-medium">Bé đã hoàn thành 4 bài tập trong tuần này. Cố gắng lên nhé!</p>
          <div className="mt-4 w-full h-3 bg-white rounded-full overflow-hidden">
            <div className="h-full w-[60%] bg-primary shadow-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;