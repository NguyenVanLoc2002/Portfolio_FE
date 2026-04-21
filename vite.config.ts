import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  server: {
    host: '0.0.0.0', // Cho phép truy cập từ mạng nội bộ
    // port: 5173, // Port mặc định, có thể bỏ qua nếu không đổi
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
});
