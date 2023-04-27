import PropTypes from 'prop-types';

export const TransactionEvent = ({ type, amount, currency }) => {
  <>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </>;
};

TransactionEvent.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
