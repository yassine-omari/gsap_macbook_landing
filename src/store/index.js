import { create } from 'zustand';

const useMacbookStore = create((set) => ({
  // 🎨 The laptop's color
  color: '#2e2c2e',
  setColor: (color) => set({ color }),

  // 📏 The laptop's size (0.08 = 16", 0.06 = 14")
  scale: 0.08,
  setScale: (scale) => set({ scale }),

  // 📺 The video playing on the laptop's screen (features section)
  texture: '/videos/feature-1.mp4',
  setTexture: (texture) => set({ texture }),

  // 🔄 Put everything back to how it started
  reset: () => set({ color: '#2e2c2e', scale: 0.08, texture: '/videos/feature-1.mp4' }),
}));

export default useMacbookStore;