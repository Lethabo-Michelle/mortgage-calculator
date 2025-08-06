import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";

function Form(props) {

    function handleSubmit() {
        props.submitValues()
    }

    return (
        <form className="form p-6 md:bg-white" action={handleSubmit}>
            <div>
                <h1 className="sm text-2xl font-bold mb-2">Mortgage Calculator</h1>
                <a href="#" className="text-lg text-gray-500 underline 1dc mb-2">Clear All</a>
            </div>
            <div className="flex flex-col py-4">
                <label htmlFor="" className="text-lg text-gray-500 mb-2">Mortgage Amount</label>
                <div className="input-group input flex items-center border-1 border-gray-400 h-12 md:h-10 overflow-hidden rounded-[0.5rem]">
                    <i className="bi bi-currency-pound text-2xl p-2 md:p-1 text-[#5c747e] bg-[#e3f4fe] w-12 h-full"></i>
                    <input type="text" className="border-none px-4 text-[#2c414c] text-xl h-full w-full"/>
                </div>
            </div>
            <div className="inputs">
                <div className="flex flex-col pb-4">
                    <label htmlFor="" className="text-lg text-gray-500 mb-2">Mortgage Term</label>
                    <div
                        className="input-group input flex justify-between border-1 border-gray-400 h-12 md:h-10 overflow-hidden rounded-[0.5rem]">
                        <input type="text" className="border-none text-[#2c414c] text-xl px-4 h-full w-full"/>
                        <span className="bg-[#e3f4fe] p-2 md:p-1 text-xl text-[#5c747e] w-20 h-full">years</span>
                    </div>
                </div>
                <div className="input flex flex-col pb-4">
                    <label htmlFor="" className="text-lg text-gray-500 mb-2">Interest Rate</label>
                    <div
                        className="input-group flex items-center md:h-10 justify-between border-1 border-gray-400 h-12 overflow-hidden rounded-lg">
                        <input type="text" className="border-none text-[#2c414c] text-xl px-4 h-full w-full"/>
                        <i className="bi bi-percent p-2 md:p-1 text-2xl text-[#5c747e] bg-[#e3f4fe] w-12 h-full"></i>
                    </div>
                </div>
            </div>
            <div>
                <label htmlFor="" className="text-lg text-gray-500">Mortgage Type</label>
                <div className="input border-1 border-gray-400 h-12 md:h-10 rounded-lg my-2 flex gap-2 items-center px-4">
                    <input type="radio" name="mortgageType" id="repayment" className="w-4 h-4 "/>
                    <label for="interestOnly" className="text-lg font-medium text-[#2c414c]">Repayment</label>
                </div>
                <div className="input border-1 border-gray-400 h-12 md:h-10  rounded-lg  mb-6 flex gap-2 items-center px-4">
                    <input type="radio" name="mortgageType" id="interestOnly" className="w-4 h-5 "/>
                    <label for="interestOnly" className="text-lg font-medium text-[#2c414c]">Interest Only</label>
                </div>
            </div>
            <button className="w-full h-14 rounded-3xl bg-[#d9db30] text-xl font-bold text-[#162937]">
                <i className="bi bi-calculator-fill px-4"></i>
                Calculate Repayments
            </button>
        </form>
    );
}

export default Form;
