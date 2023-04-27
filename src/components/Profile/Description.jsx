import PropTypes from 'prop-types';
import user from './user.json';

export function Description({ username, tag, location, avatar}) {
return (
    <div>
    <img
    src={avatar}
    alt="User avatar"
  />
  <p>{username}</p>
  <p>{tag}</p>
  <p>{location}</p>
    </div>
);
}