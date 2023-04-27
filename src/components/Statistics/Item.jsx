import PropTypes from 'prop-types';

export const Item = ({ label, percentage }) => {
  return (
    <>
      <span>{label}</span>
      <span>{percentage}</span>
    </>
  );
};

Item.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
