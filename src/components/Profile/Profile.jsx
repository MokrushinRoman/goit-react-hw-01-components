import PropTypes from 'prop-types';

// import css from './Profile.module.css';
import {
  Avatar,
  Card,
  DescriptionItem,
  DescriptionList,
  UserDescription,
  UserName,
  Quantity,
  UserStat,
  UserStatsList,
  Label,
} from './Profile.styled';

export function Profile({ profileData }) {
  const { username, tag, location, avatar, stats } = profileData;

  return (
    <Card>
      <UserDescription>
        <Avatar src={avatar} alt="User avatar" width="150" />
        <DescriptionList>
          <DescriptionItem>
            <UserName>{username}</UserName>
          </DescriptionItem>
          <DescriptionItem>@{tag}</DescriptionItem>
          <DescriptionItem>{location}</DescriptionItem>
        </DescriptionList>
      </UserDescription>

      <UserStatsList>
        {Object.entries(stats).map(([stat, value]) => {
          return (
            <UserStat key={stat + value}>
              <Label>{stat.charAt(0).toUpperCase() + stat.slice(1)}</Label>
              <Quantity>{value}</Quantity>
            </UserStat>
          );
        })}
      </UserStatsList>
    </Card>
  );
}

Profile.propTypes = {
  profileData: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

/* <div className={css.profile}>
      <div className={css.description}>
        <img
          src={avatar}
          alt="User avatar"
          className={css.avatar}
          width="150"
        />
        <ul className={css.userInfo}>
          <li className={css.name}>{username}</li>
          <li className={css.tag}>@{tag}</li>
          <li className={css.location}>{location}</li>
        </ul>
      </div>

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
    </div>*/
