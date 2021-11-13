import React from 'react';

import EpisodeCard from './EpisodeCard';

const Episodes = ({ season }) => {
  if (!season) {
    return <div>Loading Episodes</div>;
  }
  return (
    <div>
      {season.episodes.map((episode) => (
        <EpisodeCard
          key={episode.id}
          episode={episode}
          seasonNumber={season.season_number}
        />
      ))}
    </div>
  );
};

export default Episodes;
