import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, {useState} from "react";

const ExpenseItem = (props) => {
    //USE STATE TO DYNAMICALLY UPDATE ELEMENT WITH REACT, LINE BELOW IS DESTRUCTURING
    //IN USE CASES WHERE UI IS TO BE UPDATED YOU MUST USE STATE TO REASSIGN VARIABLES -- CANNOT USE STANDARD REASSIGNMENT
    //USE IN REACT IS A HOOK
   const [expenseTitle, setExpenseTitle] =  useState(props.title);

    const changeTitleClickHandler= () => {
        //REASSIGNING TITLE HERE INSIDE CLICK HANDLER
        setExpenseTitle('Updated Title');
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            {/*<ExpenseDate date={props.date}/> SELF CLOSING ELEMENT*/}
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={changeTitleClickHandler} >Change Title</button>
        </Card>
    );
}

export default ExpenseItem;