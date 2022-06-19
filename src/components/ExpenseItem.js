import './ExpenseItem.css';

function ExpenseItem(props) {
const expenseDate =  props.date.toDateString();
    return (
        <div className="expense-item">
            <div>{expenseDate}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
            </div>
            <div className="expense-item__price">${props.amount.toFixed(2)}</div>

        </div>

    );
}

export default ExpenseItem;