import PropTypes from 'prop-types';
import { FriendsListItem } from './FriendsListItem';
import css from './FriendsList.module.css';

export const FriendsList = ({ friends }) => {
  return (
    <ul className={css.list}>
      <FriendsListItem friends={friends} />
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.array.isRequired,
};
