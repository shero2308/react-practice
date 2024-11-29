import React,{useState} from "react"

function Cars(){
    const [car,setCar]=useState({'year':2012,'Brand':'Maruti Suzuki','Model':'800'});

    function handleYearChange(event){
        setCar(c=>({...c , year: event.target.value}))
    }
    function handleBrandChange(event){
        setCar(c=>({...c , Brand: event.target.value}))
    }
    function handleModelChange(event){
        setCar(c=>({...c , Model: event.target.value}))
    }
    return( <div>
                <p>Your Fav Car:{car.year} {car.Brand} {car.Model}</p>
                <input type="number" value={car.year} onChange={handleYearChange}/><br/>
                <input type="text" value={car.Brand} onChange={handleBrandChange}/><br/>
                <input type="text" value={car.Model} onChange={handleModelChange}/><br/>
            </div>

    )
}
export default Cars