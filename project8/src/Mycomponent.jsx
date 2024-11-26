import React,{useState} from 'react';

function Mycomponent(){
    const [name , setName] = useState("Name");
    const [age , setAge] = useState(0)
    const [isEmployed , setIsEmployed] = useState(false)

    const updatename = () => {
        setName("sheroyaksha");
    }
    const increase_age = ()=>{
        setAge(age+1)
    }
    const decrease_age = ()=>{
        setAge(age-1)
    }
    const Isemployed = ()=>{
        setIsEmployed(!isEmployed)
    }
    return( <div>
                <p>Name:{name}</p>
                <button onClick={updatename}>Set Name</button>

                <p>Age:{age}</p>
                <button onClick={increase_age}>Increase Age</button>
                <button onClick={decrease_age}>decrease Age</button>

                <p>Name:{isEmployed ? "yes" : "no"}</p>
                <button onClick={Isemployed}>Set Name</button>
            </div>
            );
}

export default Mycomponent

