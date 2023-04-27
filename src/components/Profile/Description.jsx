import PropTypes from 'prop-types';
import css from './Description.module.css';

export const Description = ({ username, tag, location, avatar }) => {
  return (
    <div className={css.description}>
      <img className={css.avatar} src={avatar} alt="User avatar" />
      <p className={css.name} >{username}</p>
      <p className={css.tag}>{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
  );
};

Description.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
