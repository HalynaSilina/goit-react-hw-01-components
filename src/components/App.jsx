import userData from 'user.json';
import statisticData from 'data.json';
import friendsData from 'friends.json';
import transactionsData from 'transactions.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './FriendsList/FriendsList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <div className={css.sideblocks}>
      <Profile user={userData} />
      <Statistics data={statisticData} title="Upload stats" />
      </div>
      <FriendsList friends={friendsData}/>
      <TransactionHistory items={transactionsData}/>
    </div>
  );
};
