import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Blogs from './Page/Blogs.jsx';
import Home from './Page/Home.jsx';
import Bookmarks from './Page/Bookmarks.jsx';
import MainRoot from './components/MainRoot.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainRoot></MainRoot>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
        loader: ()=> fetch('https://dev.to/api/articles?per_page=20&top=7')
      },
      {
        path: '/bookmarks',
        element: <Bookmarks></Bookmarks>
      }
    ]
    
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
