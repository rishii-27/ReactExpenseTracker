// import React from "react";
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {

    return (
        <div className='expense-item'>
            {/* <div>{props.date.toLocaleString()}</div> */}
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <div style={{ color: "red" }}>{props.location}</div>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>

        </div >
    )
}

export default ExpenseItem;