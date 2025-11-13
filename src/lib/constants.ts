// Mind AI Ultra - Constants
export const INITIAL_CREDITS = 200;

export const CREDIT_COSTS = {
  'gpt-3.5-turbo': 1,
  'gpt-4': 5,
  'image-generation': 10,
  'video-generation': 20,
} as const;

export const VIDEO_STYLES = [
  { value: 'cinematic', label: 'Cinematográfico', icon: '🎬' },
  { value: 'anime', label: 'Anime', icon: '🎌' },
  { value: 'realistic', label: 'Realista', icon: '📸' },
  { value: '3d', label: '3D', icon: '🎮' },
  { value: 'cartoon', label: 'Cartoon', icon: '🎨' },
] as const;

export const AI_MODELS = [
  { value: 'gpt-3.5-turbo', label: 'GPT-3.5 Turbo', credits: 1 },
  { value: 'gpt-4', label: 'GPT-4', credits: 5 },
] as const;
