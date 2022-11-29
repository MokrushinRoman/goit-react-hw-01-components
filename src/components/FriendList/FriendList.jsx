import css from './FriendList.module.css';

import { FriendCard } from './FriendCard/FriendCard';

export const FriendList = ({ friendsData }) => {
  return (
    <div>
      <ul className={css.friendList}>
        {friendsData.map(({ avatar, name, isOnline, id }) => (
          <FriendCard key={id} />
        ))}
      </ul>
    </div>
  );
};
