import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProjectDetails from './pages/ProjectDetails';
import Home from './pages/Home.jsx'
import Layout from './components/Layout/Layout.jsx'
import './index.css'

const router = createBrowserRouter([{
    path: '/',
    element: <Layout/>,
    children: [
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/project/:id',
            element: <ProjectDetails />,
        }]
}])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)