
import statisticData from 'data.json';
import userData from 'user.json';
import { Profile } from './Profile/Profile';
import {Statistics} from "./Statistics/Statistics";

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
        color: '#010101'
      }}
    >
    <Profile user={userData}/>
    <Statistics data = {statisticData}/>
    </div>
  );
};
