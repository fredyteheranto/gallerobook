import Head from 'next/head';
import Ejemplares from 'src/components/ejemplares';
import DashboardLayout from 'src/dashboard/layout';

export default function HomePage() {
  return (
    <>
      <DashboardLayout>
        <Ejemplares title="Mis Ejemplares" />;
      </DashboardLayout>
    </>
  );
}
