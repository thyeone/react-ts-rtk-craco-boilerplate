import Layout from '@components/common/Layout';
import Home from '@pages/home';
import { Outlet, createBrowserRouter } from 'react-router-dom';

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
    children: [{ path: 'home', element: <Home /> }],
  },
]);

export default router;
