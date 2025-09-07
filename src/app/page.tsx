'use client';

import Layout from '@/components/Layout';
import IntroLogo from '@/components/IntroLogo';
import { usePathname } from 'next/navigation';
import FullscreenNavigation from '@/components/test';

export default function Home() {
  let pathName = usePathname();

  if (pathName === '/') pathName = '/home';

  return (
    <Layout pageTitle={pathName}>
      <FullscreenNavigation />
      <section>
        <IntroLogo />
      </section>
    </Layout>
  );
}
