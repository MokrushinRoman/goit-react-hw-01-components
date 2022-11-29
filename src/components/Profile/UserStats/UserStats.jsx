import PropTypes from 'prop-types';

import css from './UserStats.module.css';

export function UserStats({ stats }) {
  return (
    <ul className={css.stats}>
      {Object.entries(stats).map(([stat, value]) => {
        return (
          <li key={stat + value} className={css.stat}>
            <span className={css.label}>
              {stat.charAt(0).toUpperCase() + stat.slice(1)}
            </span>
            <span className={css.quantity}>{value}</span>
          </li>
        );
      })}
    </ul>
  );
}

UserStats.propTypes = {
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
