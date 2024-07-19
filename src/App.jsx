import { useState } from "react";
import { initialFriends } from "../data";

function App() {
  const [openAddFriend, setOpenAddFriend] = useState(false);

  const handleAddFriend = () => setOpenAddFriend(!openAddFriend);

  return (
    <section className="app">
      <div className="sidebar">
        <FriendList />
        {openAddFriend && <FormAddFriend />}
        <Button onClicking={handleAddFriend}>{openAddFriend ? "Clear" : "Add Friend"}</Button>
      </div>
      <FormSplitBill />
    </section>
  );
};

function FriendList() {
  return (
    <ul>
      {initialFriends.map(friend => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name + " image"} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 ? (<p className="red">You owe {friend.name} ₹{Math.abs(friend.balance)}</p>) : friend.balance > 0 ? (<p className="green">{friend.name} owes you ₹{friend.balance}</p>) : (<p>You and {friend.name} are even ✅</p>)}

      <Button>Select</Button>
    </li>
  );
};

function Button({ children, onClicking }) {
  return <button className="button" onClick={() => onClicking()}>{children}</button>
}


function FormAddFriend() {

  return (
    <form action="" className="form-add-friend">
      <label htmlFor="friend-name">Friend name:</label>
      <input type="text" id="friend-name" />

      <label htmlFor="img-url">Image url</label>
      <input type="text" id="img-url" />

      <Button>Add</Button>
    </form>
  );
};

function FormSplitBill() {
  return (
    <form action="" className="form-split-bill">
      <h2>Split the bill with X</h2>

      <label htmlFor="bill-value">Total Bill Value</label>
      <input type="text" id="bill-value" />

      <label htmlFor="your-expense">Your Expense</label>
      <input type="text" id="your-expense" />

      <label htmlFor="friend-expense">X's expense</label>
      <input type="text" id="friend-expense" disabled />

      <label htmlFor="person-paying-bill">Who is paying the bill?</label>
      <select id="person-paying-bill">
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>

      <Button>Split</Button>
    </form>
  )
}

export default App;
