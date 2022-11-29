import PropTypes from 'prop-types';

import css from './Profile.module.css';

import { UserInfo } from './UserInfo/UserInfo';
import { UserStats } from './UserStats/UserStats';

export function Profile({ profileData }) {
  const { username, tag, location, avatar, stats } = profileData;

  return (
    <div className={css.profile}>
      <UserInfo
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <UserStats stats={stats} />
    </div>
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
