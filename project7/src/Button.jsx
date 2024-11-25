function Button(){
    const handleclick = () => console.log("clicking");
    const imgsrc = "./src/assets/clicking.png";
    const handleclick2 = (e)=>e.target.style.display = "none";
    return(
        <>
        <img  onClick={(e)=>handleclick2(e)} src={imgsrc}></img>
        <button onClick={handleclick}>Click me</button>
        </>
    );

}

export default Button