
export type ScreenType = 
  | 'DASHBOARD' 
  | 'BALLOONS' 
  | 'COMPARISON' 
  | 'SHAPES' 
  | 'APPLE_MATH' 
  | 'TRACING' 
  | 'LETTERS'
  | 'FEEDBACK';

export interface Lesson {
  id: ScreenType;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface ComparisonPair {
  id: number;
  tallImg: string;
  shortImg: string;
  tallAlt: string;
  shortAlt: string;
  category: string;
  icon: string;
}
