import PropTypes from 'prop-types';
import { Item } from './Item';
import css from './List.module.css';

export const List = ({ items }) => {
  return (
    <ul className={css.list}>
      {items.map(item => (
        <li key={item.id} className={css.list__item}>
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
