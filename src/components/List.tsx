import styles from '@/styles/Home.module.css'
import Item from './Item'
import Movie from '../interface/movie'
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useState } from 'react';

export default function List(props: { url: string; name: string; }) : ReactElement<any>  {

  const [loging, setLoging] = useState(true);
  const [getMovies, setGetMovies] = useState([]);

  fetch(props.url)
  .then((response) => response.json())
  .then((data) => setGetMovies(data.results))
  .then(() => console.log(getMovies))
  .then(() => setLoging(false));

  return (
    <>
      <h3>{props.name}</h3>
      <div className={styles.scrollingWrapperFlexbox} >
        {/* {getMovies.length > 2?  getMovies.map((item: Movie) => */}
        {loging === false?  getMovies.map((item: Movie) =>
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
