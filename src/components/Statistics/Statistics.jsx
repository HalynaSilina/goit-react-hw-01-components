import PropTypes from 'prop-types';
import { Title } from './Title';
import { List } from './List';

export const Statistics = ({ data, title }) => {
  return (
    <section>
      {title && <Title title={title} />}
      <List items={data} />
    </section>
  );
};

Statistics.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string,
};
