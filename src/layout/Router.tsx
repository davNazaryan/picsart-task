import { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Users from '../pages/Users';

const Router = () => {
  const pageRoutes = routes.map(({ path, title, page }: RouteProps) => {
    return <Route key={title} path={`/${path}`} element={page} />;
  });

  return <Routes>{pageRoutes}</Routes>;
};

export const routes: RouteProps[] = [
  {
    path: '/',
    page: <Home />,
    title: 'Home',
  },
  {
    path: '/users/',
    page: <Users />,
    title: 'Users',
  },
];

export interface RouteProps {
  title: string;
  path: string;
  page: ReactElement;
}

export default Router;
