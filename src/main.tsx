import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "boxicons/css/boxicons.min.css";
import App from './App.tsx'
import { NotesUIProvider } from './context/UIcontext.tsx'
import { NotesDataProvider } from './context/Datacontext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NotesDataProvider>
    <NotesUIProvider>
      <App/>
    </NotesUIProvider>
    </NotesDataProvider>
  </StrictMode>,
)
