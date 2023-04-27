import PropTypes from 'prop-types';

export const Item = ({ label, percentage }) => {
  return (
    <li>
      <span>{label}</span>
      <span>{percentage}</span>
    </li>
  );
};

Item.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
