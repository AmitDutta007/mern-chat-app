import { BrowserRouter, Routes, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Chat from '../pages/Chat';
import Home from '../pages/Home';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/chat",
        element: <Chat />,
    }
]);

const Route = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Route