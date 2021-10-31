import React from 'react';
import classes from './ShowSeasons.module.scss';
import SeasonCard from './SeasonCard';

const ShowSeasons = ({ seasons }) => {
  return (
    <div>
      {seasons.map((season) => (
        <SeasonCard key={season.id} season={season} />
      ))}
    </div>
  );
};

export default ShowSeasons;
