import PropTypes from 'prop-types';

export const Description = ({ username, tag, location, avatar }) => {
  return (
    <div>
      <img src={avatar} alt="User avatar" />
      <p>{username}</p>
      <p>{tag}</p>
      <p>{location}</p>
    </div>
  );
};

Description.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};