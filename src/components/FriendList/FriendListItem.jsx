import PropTypes from 'prop-types';

export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <>
        <span></span>
        <img src={avatar} alt="User avatar"/>
        <p>{name}</p>
        </>
    )
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
