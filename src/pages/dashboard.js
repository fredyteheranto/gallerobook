import Ejemplares from '../components/ejemplares';
import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import DashboardLayout from '../dashboard/layout';
export default function HomePage() {
  return (
    <>
      <Head>
        <title>Salvia-kit Dashboard v4 Next.js</title>
      </Head>
      <DashboardLayout>
        <Ejemplares title="Mis Ejemplares" />;
      </DashboardLayout>
    </>
  );
}
