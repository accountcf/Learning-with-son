import React, { useState } from 'react';
import { ScreenType, Lesson } from './types.ts';
import Dashboard from './screens/Dashboard.tsx';
import BalloonsActivity from './screens/BalloonsActivity.tsx';
import ComparisonActivity from './screens/ComparisonActivity.tsx';
import ShapesActivity from './screens/ShapesActivity.tsx';
import AppleMathActivity from './screens/AppleMathActivity.tsx';
import TracingActivity from './screens/TracingActivity.tsx';
import LettersActivity from './screens/LettersActivity.tsx';
import FeedbackScreen from './screens/FeedbackScreen.tsx';

const LESSONS: Lesson[] = [
  { id: 'BALLOONS', title: 'Biệt Đội Bóng Bay', description: 'Đếm số & Tô màu', icon: 'toys', color: 'bg-primary' },
  { id: 'COMPARISON', title: 'Ai Cao, Ai Thấp?', description: 'So sánh kích thước', icon: 'straighten', color: 'bg-accent' },
  { id: 'SHAPES', title: 'Thế Giới Hình Khối', description: 'Làm quen hình học', icon: 'architecture', color: 'bg-secondary' },
  { id: 'APPLE_MATH', title: 'Giỏ Táo Của Bà', description: 'Phép cộng trừ cơ bản', icon: 'eco', color: 'bg-red-400' },
  { id: 'TRACING', title: 'Mưa Rơi Tí Tách', description: 'Luyện nét chữ', icon: 'water_drop', color: 'bg-blue-400' },
  { id: 'LETTERS', title: 'Truy Tìm Chữ Cái', description: 'Làm quen bảng chữ cái', icon: 'abc', color: 'bg-orange-400' },
];

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('DASHBOARD');

  const navigateTo = (screen: ScreenType) => setCurrentScreen(screen);

  return (
    <div className="min-h-screen bg-background flex flex-col font-lexend">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 md:px-10 py-3 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer" 
          onClick={() => navigateTo('DASHBOARD')}
        >
          <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-sm">
            <span className="material-symbols-outlined text-2xl">school</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight text-gray-800">Bé Học Giỏi</h2>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <button onClick={() => navigateTo('DASHBOARD')} className="text-sm font-medium hover:text-primary transition-colors">Bài học</button>
          <button className="text-sm font-medium hover:text-primary transition-colors">Thành tích</button>
          <div className="flex items-center gap-2 pl-4 border-l">
            <div className="size-8 rounded-full overflow-hidden border">
              <img src="https://picsum.photos/seed/kid/100/100" alt="Avatar" />
            </div>
            <span className="text-sm font-bold">Bé Yêu</span>
          </div>
        </nav>

        {currentScreen !== 'DASHBOARD' && (
          <button 
            onClick={() => navigateTo('DASHBOARD')}
            className="md:hidden p-2 text-gray-500 hover:text-primary"
          >
            <span className="material-symbols-outlined">home</span>
          </button>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        {currentScreen === 'DASHBOARD' && <Dashboard lessons={LESSONS} onSelect={navigateTo} />}
        {currentScreen === 'BALLOONS' && <BalloonsActivity onBack={() => navigateTo('DASHBOARD')} onNext={() => navigateTo('FEEDBACK')} />}
        {currentScreen === 'COMPARISON' && <ComparisonActivity onBack={() => navigateTo('DASHBOARD')} onNext={() => navigateTo('FEEDBACK')} />}
        {currentScreen === 'SHAPES' && <ShapesActivity onBack={() => navigateTo('DASHBOARD')} onNext={() => navigateTo('FEEDBACK')} />}
        {currentScreen === 'APPLE_MATH' && <AppleMathActivity onBack={() => navigateTo('DASHBOARD')} onNext={() => navigateTo('FEEDBACK')} />}
        {currentScreen === 'TRACING' && <TracingActivity onBack={() => navigateTo('DASHBOARD')} onNext={() => navigateTo('FEEDBACK')} />}
        {currentScreen === 'LETTERS' && <LettersActivity onBack={() => navigateTo('DASHBOARD')} onNext={() => navigateTo('FEEDBACK')} />}
        {currentScreen === 'FEEDBACK' && <FeedbackScreen onHome={() => navigateTo('DASHBOARD')} />}
      </main>
    </div>
  );
};

export default App;