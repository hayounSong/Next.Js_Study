import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import React from 'react';
import { useRecoilState } from 'recoil';
import { cookieState } from './state';
export default function NavBar() {
  const router: NextRouter = useRouter();
  const [cookie, setCookie] = useRecoilState(cookieState);
  //현재 있는 페이지의 라우터 정보를 가져올 수 있다.
  return (
    <nav>
      <img src="/vercel.svg" />
      <div>
        {cookie}
        <Link href="/">
          <div className={router.pathname === '/' ? 'active' : ''}>Home</div>
        </Link>
        <Link href="/about">
          <div className={router.pathname === '/about' ? 'active' : ''}>About</div>
        </Link>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav div {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  );
}
