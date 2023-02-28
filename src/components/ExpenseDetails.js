import './ExpenseItem.css';

function ExpenseDetails(props) {
    const amount = props.amount
    return (
        <div className='expense-item__price'>
            &#x20b9; {amount}
        </div>
    )
}
export default ExpenseDetails;