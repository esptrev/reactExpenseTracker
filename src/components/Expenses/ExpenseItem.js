import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React from "react";

const ExpenseItem = (props) => {
    //USE STATE TO DYNAMICALLY UPDATE ELEMENT WITH REACT, LINE BELOW IS DESTRUCTURING
    //IN USE CASES WHERE UI IS TO BE UPDATED YOU MUST USE STATE TO REASSIGN VARIABLES -- CANNOT USE STANDARD REASSIGNMENT
    //USE IN REACT IS A HOOK

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date}/>
                {/*<ExpenseDate date={props.date}/> SELF CLOSING ELEMENT*/}
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
            </Card>

        </li>
    );
}

export default ExpenseItem;