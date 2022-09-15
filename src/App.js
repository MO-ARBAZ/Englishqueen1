
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function App(props) {
    const [api,setApi] = useState();
    const [Text,setText] = useState();

    function validate(){
        if(!Text){
            alert('Empty answer');
            return;
        }

        if(api[0].correct_answer === Text){
            alert('Correct ');
            setApi('');
            setText('');
            apiCall();
            return;
        }
        alert('Wrong');
        setApi('');
        setText('');
        apiCall();
        return;

    }
    useEffect(() => {
        apiCall();
    },[])
    async function apiCall(){
        let res = await fetch(`https://opentdb.com/api.php?amount=1`);
        let data = await res.json();
        console.log(data.results);
        setApi(data.results);
    }
    return (
        <div>
            {

            api && <h4>{api[0].question}</h4>
            }
            <input type='text' value={Text} onChange={e => setText(e.target.value)}/>
            <button onClick={validate}>Submit</button>
        </div>
    );
}

export default App;
