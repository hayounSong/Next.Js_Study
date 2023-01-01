import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import React from 'react';
import styles from './NavBar.module.css';
export default function NavBar() {
  const router: NextRouter = useRouter();
  //현재 있는 페이지의 라우터 정보를 가져올 수 있다.
  return (
    <nav>
      <Link href="/">
        <span className={`${styles.link} ${router.pathname === '/' ? styles.active : ''}`}>Home</span>
      </Link>

      <Link href="/about">
        <span className={`${styles.link} ${router.pathname === '/about' ? styles.active : ''}`}>About</span>
      </Link>
    </nav>
  );
}
