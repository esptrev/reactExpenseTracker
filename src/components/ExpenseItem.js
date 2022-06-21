import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {

    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            {/*<ExpenseDate date={props.date}/> You can use self closing element here*/}
            <div className="expense-item__description">
                <h2>{props.title}</h2>
            </div>
            <div className="expense-item__price">${props.amount.toFixed(2)}</div>

        </div>

    );
}

export default ExpenseItem;