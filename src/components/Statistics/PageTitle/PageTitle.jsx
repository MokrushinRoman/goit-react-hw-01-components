import PropTypes from 'prop-types';

import css from './PageTitle.module.css';

export const PageTitle = ({ title }) => {
  return <h2 className={css.title}>{title.toUpperCase()}</h2>;
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
