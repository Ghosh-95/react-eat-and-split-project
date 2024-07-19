import Button from "./Button"

export default function FormSplitBill() {
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