import PropTypes from 'prop-types';

// import css from './Statistics.module.css';
import {
  Format,
  Percentage,
  StatisticsCard,
  StatsItem,
  StatsList,
  StatsTitle,
} from './Statistics.styled';

// import { PageTitle } from './PageTitle/PageTitle';
// import { StatsList } from './StatsList/StatsList';

export const Statistics = ({ data, title }) => {
  return (
    <StatisticsCard>
      <StatsTitle>{title && title.toUpperCase()}</StatsTitle>
      <StatsList data={data}>
        {data.map(({ label, percentage, id }) => (
          <StatsItem key={id}>
            <Format>{label}</Format>
            <Percentage>{percentage}</Percentage>
          </StatsItem>
        ))}
      </StatsList>
    </StatisticsCard>
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
  title: PropTypes.string,
};

/*

<ul className={css.statList}>
      {data.map(({ label, percentage, id }) => (
        <StatsCard key={id} label={label} percentage={percentage} />
      ))}
    </ul>

<li className={css.item}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}</span>
    </li>
     */
