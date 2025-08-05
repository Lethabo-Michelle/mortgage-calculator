import React, {useState} from 'react';
import Form from "./Form.jsx";
import Results from "./Results.jsx";

function Calculator() {
    const [isEmpty, setIsEmpty] = useState(true);

    function calculate() {
        setIsEmpty(false);
    }

    return (
        <div className="h-svh grid grid-rows-1-2">
            {/*<h1>Mortgage Calculator</h1>*/}
            <Form submitValues={calculate}/>
            <Results value={isEmpty}/>
        </div>
    );
}

export default Calculator;