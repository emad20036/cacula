import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


// ...rest of your configuration...

export default defineConfig({
  base: '/calculator/',
  plugins: [react()],
});