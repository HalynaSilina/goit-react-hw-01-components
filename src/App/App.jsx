
import userData from 'user.json';
import { Profile } from "components/Profile/Profile";


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
    </div>
  );
};
