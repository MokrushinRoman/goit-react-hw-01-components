import PropTypes from 'prop-types';

// import css from './FriendCard.module.css';
import { Card, FriendAvatar, FriendName, Badge } from './FriendCard.styled';

export const FriendCard = ({ avatar, name, isOnline }) => {
  return (
    <Card>
      <Badge isOnline={isOnline}></Badge>
      <FriendAvatar src={avatar} alt="Friend's avatar" />
      <FriendName>{name}</FriendName>
    </Card>
  );
};

FriendCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

/*
      {isOnline ? (
        <div className={`${css.online} `}></div>
      ) : (
        <div className={`${css.offline} `}></div>
      )}
       */
