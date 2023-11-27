import Layout from '@components/common/Layout';
import Home from '@pages/Home';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

const Root = () => {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [{ index: true, element: <Home /> }],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
