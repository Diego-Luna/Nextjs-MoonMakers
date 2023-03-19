import styles from '@/styles/Home.module.css'
import Item from './Item'
import Movie from '../interface/movie'
import { useState } from 'react';

export default function List(props: { url: string; name: string; })  {

  const [loading, setLoading] = useState(true);
  const [getMovies, setGetMovies] = useState([]);

  fetch(props.url)
  .then((response) => response.json())
  .then((data) => setGetMovies(data.results))
  .then(() => setLoading(false));

  return (
    <>
      <h3>{props.name}</h3>
      <div className={styles.scrollingWrapperFlexbox} >
        {loading === false?  getMovies.map((item: Movie) =>
          <Item
            key={item.id}
            backdrop_path={item.backdrop_path}
            original_title={item.original_title}
            release_date={item.release_date}
            loading={false}
          ></Item>)
          :
          <Item
            loading={true}
          ></Item>
        }
      </div>
    </>
  )
}
