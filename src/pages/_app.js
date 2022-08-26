import RootRoute from '../components/RootRoute';
import { AppContextProvider } from 'context/StaticContextUser';
import { ActionControllerProvider } from 'context/action';

import ModalFormGallera from 'src/components/Modal/FormGallera';
import 'tailwindcss/tailwind.css';
import '../styles/global.css';

function MyApp(props) {
  const { Component, pageProps, router } = props;

  return (
    <>
      <ActionControllerProvider>
        <AppContextProvider>
          <RootRoute router={router}>
            <Component {...pageProps} />
            <ModalFormGallera />
          </RootRoute>
        </AppContextProvider>
      </ActionControllerProvider>
    </>
  );
}

export default MyApp;
