import PropTypes from 'prop-types';

import css from './Statistics.module.css';

import { PageTitle } from './PageTitle/PageTitle';
import { StatsList } from './StatsList/StatsList';

export const Statistics = ({ data }) => {
  return (
    <section className={css.statistics}>
      <PageTitle title="upload data" />
      <StatsList data={data} />
    </section>
  );
};

Statistics.protoType = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
