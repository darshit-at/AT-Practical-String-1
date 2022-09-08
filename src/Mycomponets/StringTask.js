import React from 'react';
import { useState } from 'react'
function StringTask() {
    const [userinput, getuserinput] = useState('');
    const [Result, setresult] = useState('');
    const HandleChange = (e) => {
        getuserinput(e.target.value);
    };

    const HandleSubmit = (e) => {
        e.preventDefault();
        const reverseString = userinput.split('').reverse().join('');
        const result =reverseString === userinput ? 'it is success' : 'it is failure';
        setresult(result);
        getuserinput('');
    };

    return (
        <React.Fragment>
            <form onSubmit={HandleSubmit}>
                <input type='text' name='userinput' value={userinput} placeholder='any text ' onChange={HandleChange} />
                <input type='submit' value="submit" />
            </form>
            <div>
                <h2>Output : {Result}</h2>
            </div>
        </React.Fragment>

    )
}
export default StringTask;
