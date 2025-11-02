import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import CityPage from './components/CityPage/CityPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <CityPage />
  </StrictMode>,
)
