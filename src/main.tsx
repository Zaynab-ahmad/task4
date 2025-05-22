import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home.tsx'
import Root from './Root.tsx'
const routers = createBrowserRouter([{
  path: '/',
  element: <Root/>,
  children: [{
    path:'',
    element: <Home/>
  }]
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routers}/>
  </StrictMode>,
)
