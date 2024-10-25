import { createBrowserRouter } from 'react-router-dom';
import MainRoot from '../components/MainRoot';
import Home from '../Page/Home';
import Blogs from '../Page/Blogs';
import Blog from '../Page/Blog';
import Bookmarks from '../Page/Bookmarks';
import Content from '../components/Content/Content';
import Author from '../components/Author/Author';

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
        path: '/blog/:id',
        loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
        element: <Blog></Blog>,
        children: [
            {
                index: true,
                element: <Content></Content>
            },
            {
                path: 'author',
                element: <Author></Author>
            }
        ]
      },
      {
        path: '/bookmarks',
        element: <Bookmarks></Bookmarks>
      }
    ]
    
  },
])
export default router;