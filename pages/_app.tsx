import Layout from 'components/\bLayout';

import React from 'react';
export default function App({ Component, pageProps }: any) {
  return (
    <>
      <Layout>
        <Component {...pageProps}></Component>
      </Layout>
    </>
  );
}

//커스텀 앱 컴포넌트에서는 module을 제외한 다른것들도 import가 가능하다. 하지만, 다른 컴포넌트에서는 module을 제외하고는 import가 불가능. css도 마찬가지!!
