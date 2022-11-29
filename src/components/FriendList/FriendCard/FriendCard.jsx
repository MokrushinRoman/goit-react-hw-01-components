export const FriendCard = ({ avatar, name, isOnline }) => {
  console.log(avatar);
  return (
    <li className="friend-card">
      <div className="status">{isOnline}</div>
      <img className="avatar" src={avatar} alt="Friend's avatar" />
      <p className="name">{name}</p>
    </li>
  );
};
