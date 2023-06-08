import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

const Header = () => {
  return (
    <nav className='flex w-full items-center justify-between rounded-xl bg-white px-8 py-6 shadow-lg'>
      <h1 className='w-full text-lg font-bold text-slate-800 lg:text-xl'>
        TodoList App
      </h1>
      <ul className='flex w-full items-center justify-end gap-x-6 text-lg font-medium text-slate-800'>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/todos'>
            <a>Todos</a>
          </Link>
        </li>
        <li>
          <Link href='/profile'>
            <a>Profile</a>
          </Link>
        </li>
        <li>
          <button onClick={() => signIn('github')}>Sign In</button>
        </li>
        <li>
          <button onClick={() => signOut()}>Sign Out</button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
