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
        if(userinput!==''){
            const reverseString = userinput.split('').reverse().join('');
            const result =reverseString === userinput ? `"${userinput}"  is palindrome string.` : `"${userinput}" is not palindrome string.`;
            setresult(result);
            getuserinput('');
        }
        else {
            alert('Please Enter some text');
            setresult('');
        }
       
    };

    return (
        <React.Fragment>
            <h2>Enter any string to check either it is palindrome or not.</h2>
         
            <form onSubmit={HandleSubmit}>
            <input type='text' name='userinput' value={userinput} placeholder=' Input String  ' onChange={HandleChange} />
                <input type='submit' value="submit" />
            </form>
            <div>
                <h2>Check Here : {Result}</h2>
                
            </div>
        </React.Fragment>

    )
}
export default StringTask;
