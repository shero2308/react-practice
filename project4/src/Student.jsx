function Student(props){
    return(
        <div className="student">
        <p>Name :{props.name}</p>
        <p>Age :{props.age}</p>
        <p>Student:{props.Isstudent ? "yes" : "no"}</p>
        </div>
    );

}

export default Student