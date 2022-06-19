
function ExpenseDate (props){
    const expenseDate =  props.date.toDateString();
    return <div>{expenseDate}</div>;
}

export default ExpenseDate;