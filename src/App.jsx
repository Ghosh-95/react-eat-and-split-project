import { useState } from "react";
import { initialFriends } from "../data";

import FormSplitBill from "./componenets/FormSplitBill";
import FormAddFriend from "./componenets/FormAddFriend";
import Friend from "./componenets/Friend";
import Button from "./componenets/Button";

function App() {
  const [friendList, setFriendList] = useState(initialFriends);
  const [openAddFriend, setOpenAddFriend] = useState(false);

  const handleAddFriend = () => setOpenAddFriend(!openAddFriend);

  return (
    <section className="app">
      <div className="sidebar">
        <FriendList friendList={friendList} />
        {openAddFriend && <FormAddFriend onAddFriend={setFriendList} friendList={friendList} />}
        <Button onClick={handleAddFriend}>{openAddFriend ? "Close" : "Add Friend"}</Button>
      </div>
      <FormSplitBill />
    </section>
  );
};

function FriendList({ friendList }) {
  return (
    <ul>
      {friendList.map(friend => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};


export default App;
