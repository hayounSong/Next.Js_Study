import React from 'react';
import Seo from 'components/Seo';
import { useRecoilState } from 'recoil';
import { cookieState } from 'components/state';
import { useEffect } from 'react';
export default function About() {
  const [cookie, setCookie] = useRecoilState(cookieState);

  useEffect(() => {
    setCookie(cookie + 1);
  }, []);
  return (
    <div>
      <Seo title="about" />
      <h3>About</h3>
    </div>
  );
}
