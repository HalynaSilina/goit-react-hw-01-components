import PropTypes from 'prop-types';

import { Description } from './Description';
import { Stats } from './Stats';

export function Profile({user}) {
  return (
    <div>
      <Description
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      />
      <Stats
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      </div>
  );
}

Profile.propTypes = {
  user: PropTypes.exact({
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
})
};
