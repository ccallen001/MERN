import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from '@/app/App';
import Route0 from '@/router/routes/Route0';
import Route1 from '@/router/routes/Route1';

const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'route-0',
        element: <Route0 />
      },
      {
        path: 'route-1',
        element: <Route1 />
      }
    ]
  }
]);

export default () => <RouterProvider router={browserRouter} />;
