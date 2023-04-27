import PropTypes from 'prop-types';
import { Title } from './Title';
import { List } from './List';
import css from './Statistics.module.css';

export const Statistics = ({ data, title }) => {
  return (
    <section className={css.statistics}>
      {title && <Title title={title} />}
      <List items={data} />
    </section>
  );
};

Statistics.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string,
};
