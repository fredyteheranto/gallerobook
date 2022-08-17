import { useRouter } from 'next/router';
import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import DashboardLayout from '../../../dashboard/layout';

const Aves = () => {
  return (
    <>
      <Head>
        <title>Salvia-kit Dashboard v4 Next.js</title>
      </Head>
      <DashboardLayout>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-12/12 bg-gray-800 py-6 px-6 rounded"></div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Aves;
