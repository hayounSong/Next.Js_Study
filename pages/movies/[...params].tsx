import Seo from 'components/Seo';
import { useRouter } from 'next/router';
export default function Detail({ params }: any) {
  const router = useRouter();
  const [title, id]: any = params || [];

  return (
    <>
      <Seo title={title} />
      {title}
    </>
  );
}

export function getServerSideProps({ params: { params } }: any) {
  return {
    props: { params },
  };
}
