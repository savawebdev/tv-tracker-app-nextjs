import React from 'react';
import classes from './Cast.module.scss';
import CastCard from './CastCard';

const Cast = ({ cast }) => {
  return (
    <div className={classes.cast}>
      <div className={classes.info}>
        {cast.map((person) => (
          <CastCard key={person.id} person={person} />
        ))}
      </div>
    </div>
  );
};

export default Cast;
