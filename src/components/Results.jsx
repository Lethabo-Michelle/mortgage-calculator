import React from 'react';
import illustrationEmpty from "../assets/illustration-empty.svg"

function Results(props) {

    if (!props.monthlyRepayment || !props.totalRepayment) {
        return (
            <div className="results p-6 bg-[#133040] w-full text-white flex flex-col items-center">
                <img src={illustrationEmpty} alt=""/>
                <h2 className="font-bold text-3xl mb-4">Results shown here</h2>
                <p className="text-[1.2rem] mb-4 text-center">Complete the form and click "calculate repayments" to see what your monthly repayments would be.</p>
            </div>
        )
    }

    return (
        <div className="results p-6 bg-[#133040] w-full text-white">
            <h2 className="font-bold text-3xl mb-4 px-2">Your results</h2>
            <p className="text-[1.2rem] mb-12 px-2">
                Your results are shown below based on the
                information you provided. To adjust the results,
                edit the form and click "Calculate Repayments" again.
            </p>
            <div className="bg-[#0e2431] p-8 rounded-2xl shadow-[0px_-9px_0px_-1px_#d8e25a] mb-4">
                <p className="text-[1.2rem] mb-4">Your monthly repayment</p>
                <span className="text-[#d8e25a] text-5xl">R {props.monthlyRepayment}</span>
                <hr className="border-spacing-1 border-white my-4"/>
                <p className="text-[1.2rem] mb-2">Total you'll repay over the term</p>
                <span className="text-3xl">R {props.totalRepayment}</span>
            </div>
        </div>
    );
}

export default Results;