import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import LearnMore from './pages/LearnMore.jsx'
import TechSpecs from './pages/TechSpecs.jsx'
import Gallery from './pages/Gallery.jsx'
import Buy from './pages/Buy.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/learn-more',
    element: <LearnMore />,
  },
  {
    path: '/tech-specs',
    element: <TechSpecs />,
  },
  {
    path: '/gallery',
    element: <Gallery />,
  },
  {
    path: '/buy',
    element: <Buy />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
