import PropTypes from 'prop-types';
import css from './FriendsListItem.module.css';

export const FriendsListItem = ({avatar, name, isOnline}) => {
    return (
        <>
        <span className={css.status} ></span>
        <img src={avatar} alt="User avatar"/>
        <p>{name}</p>
        </>
    )
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
