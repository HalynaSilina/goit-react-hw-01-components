import PropTypes from 'prop-types';
import css from './FriendsListItem.module.css';

export const FriendsListItem = ({ friends }) => {
  return friends.map(friend => (
    <li key={friend.id} className={css.item}>
      {friend.isOnline ? (
        <span className={`${css.status} ${css.online}`}></span>
      ) : (
        <span className={css.status}></span>
      )}
      <img className={css.avatar} src={friend.avatar} alt="User avatar" />
      <p className={css.name}>{friend.name}</p>
    </li>
  ));
};
FriendsListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
