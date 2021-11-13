import React, { Fragment, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { imgUrl } from '../../lib/helpers';
import classes from './SearchShows.module.scss';

const SearchShows = () => {
  const [filteredShows, setFilteredShows] = useState([]);
  const router = useRouter();

  const changeFilterHandler = async (e) => {
    const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
    e.preventDefault();

    if (e.target.value === '') {
      setFilteredShows([]);
      return;
    }

    const result = await fetch(
      `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${e.target.value}`
    );
    const data = await result.json();
    setFilteredShows(data.results);
  };

  const clickHandler = (id) => {
    router.push(`/shows/${id}`);
  };

  return (
    <Fragment>
      <h1>Search Shows</h1>

      <div>
        <input
          type='text'
          name='search'
          id='search'
          className={classes['search-input']}
          placeholder='Type here to start searching...'
          onChange={changeFilterHandler}
        />
      </div>

      {filteredShows && (
        <div className={classes['shows']}>
          {filteredShows.map((show) => (
            <Image
              className={classes['show-img']}
              src={`${imgUrl}${show.poster_path}`}
              key={show.id}
              alt={show.name}
              width={180}
              height={250}
              onClick={() => clickHandler(show.id)}
            />
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default SearchShows;
