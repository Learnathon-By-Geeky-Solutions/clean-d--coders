import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TanstackQueryContext } from '@/context'
import { RouterProvider } from 'react-router'
import { routes } from '@/routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TanstackQueryContext>
      <RouterProvider router={routes}/>
    </TanstackQueryContext>
  </StrictMode>,
)
