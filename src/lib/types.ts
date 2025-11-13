// Mind AI Ultra - Types
export type AIModel = 'gpt-4' | 'gpt-3.5-turbo';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  model?: AIModel;
}

export interface Conversation {
  id: string;
  title: string;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
}

export interface GeneratedImage {
  id: string;
  prompt: string;
  url: string;
  createdAt: Date;
  creditsUsed: number;
}

export interface GeneratedVideo {
  id: string;
  prompt: string;
  style: VideoStyle;
  url: string;
  status: 'processing' | 'completed' | 'failed';
  createdAt: Date;
  creditsUsed: number;
}

export type VideoStyle = 'cinematic' | 'anime' | 'realistic' | '3d' | 'cartoon';

export interface UserCredits {
  total: number;
  used: number;
  remaining: number;
}

export interface UsageHistory {
  id: string;
  type: 'chat' | 'image' | 'video';
  description: string;
  creditsUsed: number;
  timestamp: Date;
}
