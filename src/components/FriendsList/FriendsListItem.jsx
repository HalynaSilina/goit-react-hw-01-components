import PropTypes from 'prop-types';
import css from './FriendsListItem.module.css';

export const FriendsListItem = ({avatar, name, isOnline}) => {
    return (
        <>
        {{isOnline} ? <span className={`${css.status} ${css.online}`}></span> : <span className={css.status}></span>}
        <img className={css.avatar} src={avatar} alt="User avatar"/>
        <p className={css.name}>{name}</p>
        </>
    )
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
