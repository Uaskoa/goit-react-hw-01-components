import Profile from "./components/Profile"
import Statistics from "./components/Statistics"
import FriendList from "./components/FriendList"
import user from "./user.json"
import statisticalData from "./statistical-data.json"
import friends from "./friends.json"


const App = () => {
  return (
    <div>
      <h1>Main component</h1>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
          <Statistics title="Upload stats" stats={statisticalData} />
          <FriendList friends={friends} />
    </div>
  );
};

export default App;
