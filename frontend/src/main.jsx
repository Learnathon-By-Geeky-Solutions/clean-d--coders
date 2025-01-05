import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TanstackQueryContext } from '@/context'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TanstackQueryContext>
      <App />
    </TanstackQueryContext>
  </StrictMode>,
)
