import userData from 'user.json';
import statisticData from 'data.json';
import friendsData from 'friends.json';
import transactionsData from 'transactions.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        padding: 40,
        margin: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile user={userData} />
      <Statistics data={statisticData} title="Upload stats" />
      <FriendsList friends={friendsData}/>
      <TransactionHistory items={transactionsData}/>
    </div>
  );
};
