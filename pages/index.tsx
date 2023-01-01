import NavBar from '../components/NavBar';
import React from 'react';
export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <h1>Hello </h1>
    </div>
  );
}

// 라이브러리는 개발자로써 불러와서 사용하는것, 프레임워크는 개발자의 코드를 불러오는 시스템이다.
// 라이브러리는 사용하고 싶은대로, 사용하고 싶을때 사용가능하다. 언제 부를지, 어떤 폴더구조로 할지 마음대로 해도된다!(React)
// next.js와 같은 프레임워크에서는, 정해진 규칙을 따라야한다. 커스텀이 거의 불가능하다.
// 단 index는 예외이다. 앱의 홈은 기본적으로 index.tsx에서 나오게 된다.
