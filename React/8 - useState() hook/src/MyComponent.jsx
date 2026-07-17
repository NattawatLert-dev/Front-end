
import React, {useState} from 'react';

function MyComponent(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployee, setIsEmployee] = useState(false);

    const updateName = () => {
        setName("Spongebob");
    };

    const incrementAge = () => {
        setAge(age + 1);
    };

    const toggleEmployedStatus = () => {
        setIsEmployee(!isEmployee);
    };

    return(<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment Age</button>

        <p>Is employee: {isEmployee ? "Yes" : "No"}</p>
        <button onClick={toggleEmployedStatus}>Toggle State</button>
    </div>);

}

export default MyComponent