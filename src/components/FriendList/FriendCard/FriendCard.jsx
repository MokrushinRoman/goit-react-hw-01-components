import PropTypes from 'prop-types';

import css from './FriendCard.module.css';

export const FriendCard = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.friendCard}>
      {isOnline ? (
        <div className={`${css.online} `}></div>
      ) : (
        <div className={`${css.offline} `}></div>
      )}
      <img className={css.avatar} src={avatar} alt="Friend's avatar" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
