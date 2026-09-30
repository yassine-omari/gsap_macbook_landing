import { create } from 'zustand';

const useMacbookStore = create((set) => ({
  // 🎨 The laptop's color
  color: '#2e2c2e',
  setColor: (color) => set({ color }),

  // 📏 The laptop's size (0.128 = 16", 0.096 = 14")
  scale: 0.128,
  setScale: (scale) => set({ scale }),

  // 📺 The video playing on the laptop's screen (features section)
  texture: '/videos/feature-1.mp4',
  setTexture: (texture) => set({ texture }),

  // 🔄 Put everything back to how it started
  reset: () => set({ color: '#2e2c2e', scale: 0.128, texture: '/videos/feature-1.mp4' }),
}));

export default useMacbookStore;