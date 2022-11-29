import data from 'base/data.json';
import friendsData from 'base/friends.json';
// import transactionsData from 'base/transactions.json';
import profileData from 'base/user.json';

import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
// import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile profileData={profileData} />
      <div>
        <Statistics data={data} />
      </div>
      <FriendList friendsData={friendsData} />
      {/* <TransactionHistory></TransactionHistory> */}
    </>
  );
};
