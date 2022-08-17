import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import '../styles/global.css';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
