export const FriendCard = ({ avatar, name, isOnline }) => {
  return (
    <li className="friend-card">
      <div className="online-badge"></div>
      <img className="avatar" src={avatar} alt="Friend's avatar" />
      <p className="name">{name}</p>
    </li>
  );
};
