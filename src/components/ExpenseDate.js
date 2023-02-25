import './ExpenseItem.css';

function ExpenseDate(props) {

    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateInMarathi = props.date.toLocaleDateString("hi-US", options);

    return (
        <>
            <div style={{ color: "orange", fontWeight: 'bold' }} className="expense-date">{dateInMarathi}</div>
        </>
    )
}
export default ExpenseDate;