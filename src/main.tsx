import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Initialize theme BEFORE React renders to prevent flash
import { initializeTheme } from './utils/theme'
initializeTheme();

createRoot(document.getElementById("root")!).render(<App />);
