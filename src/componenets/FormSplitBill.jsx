import Button from "./Button";
import { useState } from "react";

export default function FormSplitBill({ selectFriend, onSplitBill }) {
    const [totalBill, setTotalBill] = useState(0);
    const [paidByUser, setPaidByUser] = useState(0);
    const [personPaying, setPersonPaying] = useState('user');

    const paidByFriend = totalBill - paidByUser;
    function handleSubmit(e) {
        e.preventDefault();

        if (!totalBill || !paidByUser) return;

        onSplitBill(personPaying === 'user' ? paidByFriend : -paidByUser)

    }

    return (
        <form action="" className="form-split-bill" onSubmit={handleSubmit}>
            <h2>Split the bill with {selectFriend?.name}</h2>

            <label htmlFor="bill-value">Total Bill Value</label>
            <input type="text" id="bill-value" required value={totalBill} onChange={e => setTotalBill(Number(e.target.value))} />

            <label htmlFor="your-expense">Your Expense</label>
            <input type="text" id="your-expense" required value={paidByUser} onChange={e => setPaidByUser(Number(e.target.value) > totalBill ? 0 : Number(e.target.value))} />

            <label htmlFor="friend-expense">{selectFriend?.name}'s expense</label>
            <input type="text" id="friend-expense" disabled value={paidByFriend} />

            <label htmlFor="person-paying-bill">Who is paying the bill?</label>
            <select id="person-paying-bill" value={personPaying} onChange={e => setPersonPaying(e.target.value)}>
                <option value="user">You</option>
                <option value={selectFriend?.name}>{selectFriend?.name}</option>
            </select>

            <Button>Split</Button>
        </form>
    )
}