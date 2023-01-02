import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import Seo from '../components/Seo';
import axios from 'axios';
const API_KEY = 'd694e0e93cf7e09038bd1dd7160e3088';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
export default function Home() {
  const [movies, setMovies] = useState<any[]>([]);
  const getMovie = () => {
    return axios.get(`http://localhost:3000/api/movies`);
  };

  const { isLoading, isError, data, error } = useQuery('movies', getMovie);
  useEffect(() => {
    setMovies(data?.data.results);
  });
  if (isLoading) {
    return <div>로딩중</div>;
  }
  if (isError) {
    return <div>에러</div>;
  } else {
    // console.log(data.data.results); // useEffect(() => {
    //   // setMovies(results);
    // }, []);
    const router = useRouter();

    const onClick = (id: number, title: string) => {
      router.push(`/movies/${title}/${id}}`);
      // router.push(
      //   {
      //     pathname: `/movies/${title}/${id}}`,
      //     query: {
      //       title: title,
      //     },
      // }
      // `/movies/${title}/${id}}`,
      // );
    };

    return (
      <div className="container">
        <Seo title="Home" />
        {movies?.map((movie) => (
          <div className="movie" key={movie.id} onClick={() => onClick(movie.id, movie.original_title)}>
            <Link href={`/movies/${movie.title}/${movie.id}}`}>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            </Link>
            <h4>{movie.original_title}</h4>
          </div>
        ))}
        <style jsx>{`
          .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 20px;
            gap: 20px;
          }
          .movie img {
            max-width: 100%;
            border-radius: 12px;
            transition: transform 0.2s ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          }
          .movie:hover img {
            transform: scale(1.05) translateY(-10px);
          }
          .movie h4 {
            font-size: 18px;
            text-align: center;
          }
        `}</style>
      </div>
    );
  }
}
// export async function getServerSideProps() {
//   const { results } = await (await fetch('http://localhost:3000/api/movies')).json();

//   return {
//     props: {
//       results,
//     },
//   };
// }
//이건 백엔드에서만 작동하게된다.

// 라이브러리는 개발자로써 불러와서 사용하는것, 프레임워크는 개발자의 코드를 불러오는 시스템이다.
// 라이브러리는 사용하고 싶은대로, 사용하고 싶을때 사용가능하다. 언제 부를지, 어떤 폴더구조로 할지 마음대로 해도된다!(React)
// next.js와 같은 프레임워크에서는, 정해진 규칙을 따라야한다. 커스텀이 거의 불가능하다.
// 단 index는 예외이다. 앱의 홈은 기본적으로 index.tsx에서 나오게 된다.
