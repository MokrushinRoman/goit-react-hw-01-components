import PropTypes from 'prop-types';

import css from './UserInfo.module.css';

export const UserInfo = ({ avatar, username, tag, location }) => {
  return (
    <div className={css.description}>
      <img src={avatar} alt="User avatar" className={css.avatar} width="150" />
      <ul className={css.userInfo}>
        <li className={css.name}>{username}</li>
        <li className={css.tag}>@{tag}</li>
        <li className={css.location}>{location}</li>
      </ul>
    </div>
  );
};

UserInfo.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
