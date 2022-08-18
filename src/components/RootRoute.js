import React from 'react';
import useAppContext from '../context/StaticContextUser';
import LoadingPage from './LoadingPage';

const ROUTES_PRIVATE = ['/dashboard'];
const ROUTES_AUTH = ['/login', '/register'];

const isBrowser = () => typeof window !== 'undefined';

const RootRoute = ({ children, router }) => {
  const { isSession, loading } = useAppContext();

  if (loading) return <LoadingPage />;
  if (ROUTES_PRIVATE.includes(router.pathname) && !isSession) {
    router.replace('/login');
    return <LoadingPage />;
  }
  if (ROUTES_AUTH.includes(router.pathname) && isSession) {
    router.replace('/dashboard');
    return <LoadingPage />;
  }

  return children;
};

export default RootRoute;
