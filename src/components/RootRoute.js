import React from 'react';
import useAppContext from '../context/StaticContextUser';
import LoadingPage from './LoadingPage';

const isBrowser = () => typeof window !== 'undefined';

const RootRoute = ({ children, router }) => {
  const { isSession, loading } = useAppContext();
  console.log('isSession, loading', isSession, loading);

  return <LoadingPage />;
  // return children;
};

export default RootRoute;
