import data from 'base/data.json';
import friendsData from 'base/friends.json';
import transactionsData from 'base/transactions.json';
import profileData from 'base/user.json';

import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';

import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Profile profileData={profileData} />

      <Statistics data={data} />
      <FriendList friendsData={friendsData} />

      <TransactionHistory operations={transactionsData} />
    </Container>
  );
};
