import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import TitleBar from "./title-bar.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TitleBar/>
    <App />
  </StrictMode>,
)
