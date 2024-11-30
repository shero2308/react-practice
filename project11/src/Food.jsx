import React , {useState} from "react"
function Food(){
    const [foods , setFoods] = useState(['apple', 'Mango', 'Banana']);

    function HandleAddFoods(){
        const NewFood = document.getElementById("FoodInput").value;
        document.getElementById("FoodInput").value= "";
        setFoods(f=>[...f ,NewFood]);
    }
    function HandleRemoveFoods(index){
        setFoods(foods.filter((_,i)=>i!==index));
    }

    return(
            <div>
                <h2>List of Foods</h2>
                <ul>
                    {foods.map((foods,index) => <li key={index} onClick={()=>HandleRemoveFoods(index)}>{foods}</li>)}
                </ul>
                <input type="text" id="FoodInput" placeholder="Enter Food Name"/>
                <button onClick={HandleAddFoods}>ADD</button>
            </div>
    );

}


export default Food