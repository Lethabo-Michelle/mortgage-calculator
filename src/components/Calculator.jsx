import React, {useState} from 'react';
import Form from "./Form.jsx";
import Results from "./Results.jsx";

function Calculator() {
    const [monthlyRepayment, setMonthlyRepayment] = useState(undefined);
    const [totalRepayment, setTotalRepayment] = useState(undefined)

    function calculate(amount, term, interestRate) {
        const months = term * 12;
        const rate = interestRate / 100;

        const numerator = rate * (Math.pow((1 + rate), months));
        const denominator = Math.pow((1 + rate), months) - 1;
        const payment = amount * numerator / denominator;
        const overallPayment = payment * months;

        setMonthlyRepayment(payment.toFixed(2));
        setTotalRepayment(overallPayment.toFixed(2))
    }

    return (
        <div className="calculator h-svh grid grid-rows-1-2 md:grid-cols-2 md:grid md:bg-white">
            {/*<h1>Mortgage Calculator</h1>*/}
            <Form submitValues={calculate}/>
            <Results monthlyRepayment={monthlyRepayment} totalRepayment={totalRepayment}/>
        </div>
    );
}

export default Calculator;