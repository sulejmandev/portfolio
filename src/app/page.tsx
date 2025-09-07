'use client';

import Layout from '@/components/Layout';
import IntroLogo from '@/components/IntroLogo';
import { usePathname } from 'next/navigation';

export default function Home() {
  let pathName = usePathname();

  if (pathName === '/') pathName = '/home';

  return (
    <Layout pageTitle={pathName}>
      <section>
        <IntroLogo />
      </section>
    </Layout>
  );
}
