import { useState } from "react";
import { initialFriends } from "../data";

import FormSplitBill from "./componenets/FormSplitBill";
import FormAddFriend from "./componenets/FormAddFriend";
import Friend from "./componenets/Friend";
import Button from "./componenets/Button";

function App() {
  const [friendList, setFriendList] = useState(initialFriends);
  const [openAddFriend, setOpenAddFriend] = useState(false);
  const [selectFriend, setSelectFriend] = useState("");

  const handleAddFriend = () => setOpenAddFriend(!openAddFriend);
  const handleAddNewFriend = (friendObj) => {
    setFriendList([...friendList, friendObj]);
    setOpenAddFriend(false);
  };

  function handleSelectFriend(friend) {
    setSelectFriend(cur => cur?.id === friend.id ? "null" : friend);
    setOpenAddFriend(false);
  };

  function handleSplitBill(value) {
    setFriendList(friends => friends.map(friend => friend.id === selectFriend.id ? { ...friend, balance: friend.balance + value } : friend));
    setSelectFriend(null);
  }

  return (
    <section className="app">
      <div className="sidebar">
        <FriendList friendList={friendList} onSelectFriend={handleSelectFriend} selectFriend={selectFriend} />
        {openAddFriend && <FormAddFriend onAddFriend={handleAddNewFriend} />}
        <Button onClick={handleAddFriend}>{openAddFriend ? "Close" : "Add Friend"}</Button>
      </div>
      {selectFriend !== '' && <FormSplitBill selectFriend={selectFriend} onSplitBill={handleSplitBill} />}
    </section>
  );
};

function FriendList({ friendList, onSelectFriend, selectFriend }) {
  return (
    <ul>
      {friendList.map(friend => (
        <Friend key={friend.id} friend={friend} onSelectFriend={onSelectFriend} selectFriend={selectFriend} />
      ))}
    </ul>
  );
};


export default App;
