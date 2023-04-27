import PropTypes from 'prop-types';

import { Item } from './Item';

export const List = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Item label={item.label} percentage={item.percentage} />
        </li>
      ))}
    </ul>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
