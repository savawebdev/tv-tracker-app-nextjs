import React from 'react';
import Image from 'next/image';
import { imgUrl } from '../../../lib/helpers';
import classes from './CastCard.module.scss';
import Card from '../../UI/Card/Card';

const CastCard = ({ person }) => {
  const roles = person.roles.map((role) => role.character).join(', ');
  return (
    <Card>
      <Image
        src={`${imgUrl}${person.profile_path}`}
        alt={person.name}
        width={180}
        height={250}
      />
      <div className={classes.info}>
        <h3>
          {person.name} <span>{person.total_episode_count} episodes</span>
        </h3>
        <p>As: {roles}</p>
      </div>
    </Card>
  );
};

export default CastCard;
