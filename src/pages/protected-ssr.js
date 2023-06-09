import AccessDenied from '@/components/Access-Denied';
import Layout from '@/containers/Layout';
import { getSession, useSession } from 'next-auth/react';

const ProtectedSSR = () => {
  const { data: session, status } = useSession();
  console.log(session);

  // if (!session) {
  //   return (
  //     <Layout>
  //       <AccessDenied />
  //     </Layout>
  //   );
  // }

  return (
    <Layout>
      <h1 className=' my-6 w-full text-center text-xl font-semibold lg:text-2xl'>
        {session.user.name} . Welcome to Protected-SSR Page
      </h1>
    </Layout>
  );
};

export default ProtectedSSR;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination:
          '/api/auth/signin?callbackUrl=http://localhost:3000/protected-ssr',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
