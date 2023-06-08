import Layout from '@/containers/Layout';
import { signIn, useSession } from 'next-auth/react';

const Profile = () => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });

  if (status === 'loading') {
    return (
      <Layout>
        <div className='text-center text-xl font-semibold text-slate-800'>
          Loading ...
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <h2 className=' my-6 w-full text-center text-xl font-semibold lg:text-2xl'>
        Hi {session.user.name}. Welcome to Profile Page
      </h2>
    </Layout>
  );
};

export default Profile;
