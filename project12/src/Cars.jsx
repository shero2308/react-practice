import { useState } from "react"

function Cars(){

    const[car,setCar] = useState([])
    const[carYear,setCarYear] = useState(new Date().getFullYear())
    const[carModel,setCarModel] = useState("")
    const[carMake,setCarMake] = useState("")

    function handleAddCar(){
        const newCar = {year:carYear,make:carMake,model:carModel};
        setCar(c => [...c,newCar]);
        setCarYear(new Date().getFullYear())
        setCarModel("")
        setCarMake("")
        

    }
    function handleRemoveCar(index){
        setCar(c => c.filter((_,i) => i != index))
    }

    function handleYearChange(event){
        setCarYear(event.target.value)
        
    }

    function handleMakeChange(event){
        setCarMake(event.target.value)
        
    }
    function handleModelChange(event){
        setCarModel(event.target.value)
        
    }

   return(
            <div>
                <h2>LIST OF CARS</h2>
                <ul>
                    {car.map((car,index)=> <li key={index} onClick={()=>handleRemoveCar(index)}>
                                                {car.year} {car.make} {car.model}
                                            </li>)}
                </ul>
                <input type="number" value={carYear} onChange={handleYearChange}/><br />
                <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter Car Make"/><br />
                <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter Car Model"/><br />
                <button onClick={handleAddCar}>ADD CAR</button>
                
            </div>
   )

}

export default Cars