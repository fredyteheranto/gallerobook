import 'tailwindcss/tailwind.css';
import RootRoute from '../components/RootRoute';
import '../styles/global.css';
import { AppContextProvider } from 'context/StaticContextUser';

function MyApp(props) {
  const { Component, pageProps, router } = props;

  return (
    <AppContextProvider>
      <RootRoute router={router}>
        <Component {...pageProps} />
      </RootRoute>
    </AppContextProvider>
  );
}

export default MyApp;
