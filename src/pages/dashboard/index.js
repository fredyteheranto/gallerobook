import Head from 'next/head';
import Ejemplares from 'src/components/ejemplares';
import DashboardLayout from 'src/dashboard/layout';

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
