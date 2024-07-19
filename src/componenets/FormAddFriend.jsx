import Button from "./Button";

export default function FormAddFriend({ friendList, onAddFriend }) {
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