import './Expenses.css';
import Card from "../UI/Card";
import React, {useState} from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    console.log(props)
    const [filteredYear, setFilteredYear] = useState('2022');

    const filterYearHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense ) => {
        return expense.date.getFullYear().toString() === filteredYear;
    })



    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onYearChange={filterYearHandler}
                />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>;
            </Card>
        </div>
    );
}

export default Expenses;