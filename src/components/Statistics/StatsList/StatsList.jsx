import PropTypes from 'prop-types';

import css from './StatsList.module.css';

import { StatsCard } from '../StatsCard/StatsCard';

export const StatsList = ({ data }) => {
  return (
    <ul className={css.statList}>
      {data.map(({ label, percentage, id }) => (
        <StatsCard key={id} label={label} percentage={percentage} />
      ))}
    </ul>
  );
};

StatsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
