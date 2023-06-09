import { signIn } from 'next-auth/react';
import Link from 'next/link';

export default function AccessDenied() {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center'>
      <h1 className='mt-6 w-full text-center text-3xl font-bold text-red-500 lg:text-5xl'>
        Access Denied
      </h1>
      <button
        onClick={(e) => {
          e.preventDefault();
          signIn();
        }}
        className='mt-4 text-xl font-normal text-blue-500 hover:text-blue-700'
      >
        <Link href='/api/auth/signin'>
          <a>You must be signed in to view this page</a>
        </Link>
      </button>
    </div>
  );
}
