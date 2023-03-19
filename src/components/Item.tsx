import { useState } from 'react';
import styles from '@/styles/item.module.css'

export default function Item(props: { loading: boolean,  original_title?: string; backdrop_path?: string, release_date?: Date; }) {

  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoaded = () => {
    setIsLoading(false);
  };

  if (props.loading === true){
    return (
      <div className={styles.item} >
        <div className={styles.img} >
          <img className={styles.loading} src="loading.gif" alt="Cargando..." />
        </div>
        <p className={styles.p} > <b>...</b> </p>
        <p className={styles.p} > ...</p>
      </div>
    );
  }

  return (
    <div className={styles.item} >
      <div className={styles.img} >
        {isLoading && <img className={styles.loading} src="loading.gif" alt="Cargando..." />}
        <img
          className={styles.img}
          src={`https://image.tmdb.org/t/p/w500/${props.backdrop_path}`}
          alt={props.original_title}
          onLoad={handleImageLoaded}
          style={{ display: isLoading ? "none" : "block" }}
        />
      </div>
      <p className={styles.p} > <b>{props.original_title}</b> </p>
      <p className={styles.p} > {`${props.release_date}`}</p>
    </div>
  );
}