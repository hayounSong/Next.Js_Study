import React, { useEffect, useState } from 'react';
import Seo from '../components/Seo';

const API_KEY = 'd694e0e93cf7e09038bd1dd7160e3088';
export default function Home() {
  const [movies, setMovies] = useState<any[]>([]);
  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)).json();
      setMovies(results);
    })();
  }, []);
  return (
    <div className="container">
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
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

// 라이브러리는 개발자로써 불러와서 사용하는것, 프레임워크는 개발자의 코드를 불러오는 시스템이다.
// 라이브러리는 사용하고 싶은대로, 사용하고 싶을때 사용가능하다. 언제 부를지, 어떤 폴더구조로 할지 마음대로 해도된다!(React)
// next.js와 같은 프레임워크에서는, 정해진 규칙을 따라야한다. 커스텀이 거의 불가능하다.
// 단 index는 예외이다. 앱의 홈은 기본적으로 index.tsx에서 나오게 된다.
