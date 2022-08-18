import { useRouter } from 'next/router';
import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import DashboardLayout from '../../../dashboard/layout';

const Aves = () => {
  const router = useRouter();
  const { idDetails } = router.query;
  console.log(idDetails);
  return (
    <>
      <Head>
        <title>Detalle de {idDetails || 'page Not Foundddd'}</title>
      </Head>
      <DashboardLayout>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-12/12 bg-gray-800 py-6 px-6 rounded">
            Detalle de {idDetails}
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Aves;
