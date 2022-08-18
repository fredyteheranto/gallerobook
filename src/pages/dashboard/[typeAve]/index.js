import { useRouter } from 'next/router';
import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import DashboardLayout from '../../../dashboard/layout';
import Ejemplares from '../../../components/ejemplares';
import Error from 'next/error';

const TypoAves = () => {
  const router = useRouter();
  const { typeAve, idDetails } = router.query;
  console.log('ave', router.query);

  return (
    <>
      <Head>
        <title>Mis {typeAve || 'page Not Foundddd'}</title>
      </Head>

      <DashboardLayout>
        {typeAve &&
          (() => {
            switch (typeAve) {
              case 'gallos':
                return <Ejemplares title={typeAve} />;
              case 'madres':
                return <Ejemplares title={typeAve} />;
              case 'gallinas':
                return <Ejemplares title={typeAve} />;
              case 'padrotes':
                return <Ejemplares title={typeAve} />;
              case 'camadas':
                return <Ejemplares title={typeAve} />;
              case 'combates':
                return <Ejemplares title={typeAve} />;
              default:
                return <Error statusCode={404} title="page Not Foundddd" />;
            }
          })()}
      </DashboardLayout>
    </>
  );
};

export default TypoAves;
