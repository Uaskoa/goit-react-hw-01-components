import Profile from "./components/Profile/Profile"
import Statistics from "./components/Statisctics/Statistics"
import FriendList from "./components/FriendList/FriendList"
import TransactionHistory from "./components/TransactionHistory/TransactionHistory"
import user from "./user.json"
import statisticalData from "./statistical-data.json"
import friends from "./friends.json"
import transactions from "./transactions.json"
import "./styles.css";


const App = () => {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={statisticalData} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
