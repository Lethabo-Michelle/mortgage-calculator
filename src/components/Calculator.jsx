import React, {useState} from 'react';
import Form from "./Form.jsx";
import Results from "./Results.jsx";

function Calculator() {
    const [isEmpty, setIsEmpty] = useState(true);

    function calculate() {
        setIsEmpty(false);
    }

    return (
        <div className="calculator h-svh grid grid-rows-1-2 m-auto md:grid-cols-2 md:grid md:bg-white">
            {/*<h1>Mortgage Calculator</h1>*/}
            <Form submitValues={calculate}/>
            <Results value={isEmpty}/>
        </div>
    );
}

export default Calculator;