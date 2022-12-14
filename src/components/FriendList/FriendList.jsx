import PropTypes from 'prop-types';

// import css from './FriendList.module.css';
import { List } from './FriendList.styled';

import { FriendCard } from './FriendCard/FriendCard';

export const FriendList = ({ friendsData }) => {
  return (
    <List>
      {friendsData.map(({ avatar, name, isOnline, id }) => (
        <FriendCard key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friendsData: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
