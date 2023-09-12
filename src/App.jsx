import React, { useState } from "react";
import './index.css';

const App = () => {


    const [name,setName] = useState({
        fname:'',
        lname:''
    })

    const userInput = (event) => {
        console.log(event.target.value);

        const name = event.target.name;
        const value = event.target.value;

        setName((preValue)=>{
           
                if(name==='fname'){
                    return{
                        fname:value,
                        lname:preValue.lname
                    }
                }else if(name==='lname'){
                    return{
                        fname:preValue.fname,
                        lname:value
                    }
                }
            
            }
        );
    }

    const onSub =(event) => {
        event.preventDefault();
        console.log("Submitted");
    }
    return(
        <>
            <div className="containeer">
                <h1>Hello{name.fname}{name.lname}</h1>
                <form onSubmit={onSub}>
                <input type="text" placeholder="Enter your First Name" onChange={userInput} name="fname" value={name.fname} />
                <input type="text" placeholder="Enter your Last Name" onChange={userInput} name="lname" value={name.lname} />
                <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default App;