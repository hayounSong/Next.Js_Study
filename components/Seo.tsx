import Head from 'next/head';
import React, { ReactNode } from 'react';
type titleType = { title: string };
export default function Seo({ title }: titleType) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}
