
import React, {useState} from "react"

function Counter(){

    const [count, setCount] = useState(0);

    const Increment = () => {
        setCount(count + 1);
    };

    const Decrement = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return(
        <>
        <div className="counter-container">
            <h1 className="display">{count}</h1>
            <button onClick={Decrement} className="button">Decrement</button>
            <button onClick={reset} className="button">Reset</button>
            <button onClick={Increment} className="button">Increment</button>
        </div>
        </>
    );
}

export default Counter