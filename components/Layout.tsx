import NavBar from './NavBar';
import React from 'react';
export default function Layout({ children }: any) {
  //children은 하나의 component를 또 다른 Component 안에 넣을때 쓴다
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
