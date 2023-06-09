import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

const Header = () => {
  const { data: session, status } = useSession();

  return (
    <nav className='flex w-full items-center justify-between rounded-xl bg-white px-8 py-6 shadow-lg'>
      <h1 className='w-full text-lg font-bold text-slate-800 lg:text-xl'>
        TodoList App
      </h1>
      <ul
        className={`flex w-full items-center justify-end gap-x-6 text-base font-normal text-slate-800 lg:text-lg ${
          status === 'loading' && !session ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/protected-ssr'>
            <a>Protected-SSR</a>
          </Link>
        </li>
        <li>
          <Link href='/profile'>
            <a>Profile</a>
          </Link>
        </li>
        {!session && status !== 'loading' && (
          <li>
            <button onClick={() => signIn('github')}>Sign In</button>
          </li>
        )}
        {/*  */}
        {session && (
          <li>
            <button onClick={() => signOut()}>Sign Out</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Header;
