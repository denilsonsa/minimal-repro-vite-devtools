import { defineConfig } from 'vite';
import { DevTools } from '@vitejs/devtools'

export default defineConfig({
    rolldownOptions: {
        devtools: {},
    },
    plugins: [
        DevTools(),
    ],
    build: {
        rolldownOptions: {
            devtools: {},
        }
    },
});
