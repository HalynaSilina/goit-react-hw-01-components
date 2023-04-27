import PropTypes from 'prop-types';
import user from './user.json';
import { Description } from './Description';
import { Stats } from './Stats';

export function Profile({username, tag, location, avatar, stats}) {
  return (
    (
      <div>
        <Description username={username} tag={tag} location={location} avatar={avatar}/>
      </div>
    ),
    (
      <ul>
        <Stats />
      </ul>
    )
  );
}
