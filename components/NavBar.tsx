import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import React from 'react';
export default function NavBar() {
  const router: NextRouter = useRouter();
  //현재 있는 페이지의 라우터 정보를 가져올 수 있다.
  return (
    <nav>
      <Link href="/">
        <span className={router.pathname === '/' ? 'active' : ''}>Home</span>
      </Link>

      <Link href="/about">
        <span className={router.pathname === '/about' ? 'active' : ''}>About</span>
      </Link>
      <style tsx>{`
        nav {
          background-color: tomato;
        }
        .active {
          color: blue;
        }
      `}</style>
    </nav>
  );
}
