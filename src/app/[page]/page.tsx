import Layout from '@/components/Layout';
import Home from '../page';
import { menuItems } from '@/data/menu';

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;

  let content;

  switch (page) {
    case 'home':
      return <Home />;
      break;

    case 'about':
      content = (
        <>
          <h1 className="text-3xl font-bold">Welcome to {page}</h1>
          <p className="mt-4">This is the content area for the Home Page.</p>
        </>
      );
      break;

    default:
      return (
        <>
          <h1 className="text-3xl font-bold">Page Not Found</h1>
          <p className="mt-4">The page {page} does not exist.</p>
        </>
      );
      break;
  }

  return <Layout pageTitle={`/${page}`}>{content}</Layout>;
}
