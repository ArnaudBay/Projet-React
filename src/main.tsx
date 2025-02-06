import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App01 from './01/App01.tsx'
import './index.css'
//import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App01 />
  </StrictMode>,
)
