import { Profile } from "./Profile/Profile.jsx";
import { Statistics } from "./Statistics/statistics.jsx";
import user from "./Profile/user.json";
import data from 'components/Data/data.json'


export const App = () => {

  return (
    <div>
      <Profile 
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}/>
    <Statistics title="Upload stats" stats={data} />;
<Statistics stats={data} />;
    </div>
  );
};
