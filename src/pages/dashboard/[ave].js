import { useRouter } from 'next/router';
import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import DashboardLayout from '../../dashboard/layout';
import Ejemplares from '../../components/ejemplares';
import Error from 'next/error';

const TypoAves = () => {
  const router = useRouter();
  const { ave } = router.query;

  return (
    <>
      <Head>
        <title>Salvia-kit Dashboard v4 Next.js</title>
      </Head>
      <DashboardLayout>
        {(() => {
          switch (ave) {
            case 'gallos':
              return <Ejemplares title={ave} />;
            case 'gallinas':
              return <Ejemplares title={ave} />;
            case 'padrotes':
              return <Ejemplares title={ave} />;
            case 'camadas':
              return <Ejemplares title={ave} />;
            default:
              return <Error statusCode={404} title="page Not Foundddd" />;
          }
        })()}
      </DashboardLayout>
    </>
  );
};

export default TypoAves;
