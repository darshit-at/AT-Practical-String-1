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
            const result =reverseString === userinput ? `${userinput} is Palindrome character` : `${userinput} is Not Palindrome character`;
            setresult(result);
            getuserinput('');
        }
        else {
            alert('Please Enter some text');
        }
       
    };

    return (
        <React.Fragment>
            <h2>Enter Any character That You want check</h2>
            <h2>It is  palindrome or Not</h2>
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
