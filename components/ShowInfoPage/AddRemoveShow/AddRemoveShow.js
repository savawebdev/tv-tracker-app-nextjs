import React from 'react';
import useStore from '../../../store/store';
import { fetchData } from '../../../lib/helpers';
import classes from './AddRemoveShow.module.scss';
import Button from '../../UI/Button/Button';
import LoadingSpinner from '../../UI/Loading/LoadingSpinner';

const AddRemoveShow = ({ show }) => {
  const { loading, setLoading, shows, addShow, removeShow } = useStore();

  const isShowAdded = shows.find((s) => s.id === show.id);

  const clickHandler = async () => {
    setLoading();
    if (isShowAdded) {
      removeShow(show.id);
      const result = await fetch('/api/shows/remove-show', {
        method: 'DELETE',
        body: JSON.stringify({ id: show.id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setLoading();
      return;
    }

    const seasons = [];

    for (const season of show.seasons) {
      const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
      const result = await fetchData(
        `https://api.themoviedb.org/3/tv/${show.id}/season/${season.season_number}?api_key=${apiKey}&language=en-US`
      );
      seasons.push(result);
    }

    const showToAdd = { ...show, seasons, episodesWatched: 0 };

    addShow(showToAdd);

    const result = await fetch('/api/shows/add-show', {
      method: 'POST',
      body: JSON.stringify({ show: showToAdd }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setLoading();
  };

  return (
    <div className={classes.actions}>
      {loading ? (
        <Button
          label={<LoadingSpinner color='white' size='small' />}
          color='blue'
          size='small'
          args={{ onClick: clickHandler }}
          disabled={true}
        />
      ) : (
        <Button
          label={isShowAdded ? 'Remove' : 'Add'}
          color='blue'
          size='small'
          args={{ onClick: clickHandler }}
        />
      )}
    </div>
  );
};

export default AddRemoveShow;
