import { useState } from "react";
import { initialFriends } from "../data";

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

function Button({ children, onClick }) {
  return <button className="button" onClick={onClick}>{children}</button>
}


function FormAddFriend({ friendList, onAddFriend }) {
  const [friendName, setFriendName] = useState('');
  const [friendImage, setFriendImage] = useState('https://i.pravatar.cc/48');

  const handleSubmit = (e) => {
    const id = crypto.randomUUID();

    if (!friendName || !friendImage) return;

    e.preventDefault();
    const newObj = { id, name: friendName, image: `${friendImage}?u=${id}`, balance: 0 };

    onAddFriend([...friendList, newObj]);

    setFriendImage('https://i.pravatar.cc/48');
    setFriendName('');
  }

  return (
    <form action="" className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="friend-name">Friend name:</label>
      <input type="text" id="friend-name" value={friendName} onChange={e => setFriendName(e.target.value)} />

      <label htmlFor="img-url">Image url</label>
      <input type="text" id="img-url" value={friendImage} onChange={e => setFriendImage(e.target.value)} />

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
