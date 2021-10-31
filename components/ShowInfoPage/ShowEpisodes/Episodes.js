import React from 'react';
import EpisodeCard from './EpisodeCard';

const Episodes = ({ season }) => {
  if (!season) {
    return <div>Loading Episodes</div>;
  }
  return (
    <div>
      {season.episodes.map((episode) => (
        <EpisodeCard key={episode.id} episode={episode} />
      ))}
    </div>
  );
};

export default Episodes;
