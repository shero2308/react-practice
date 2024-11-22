import List from "./List.jsx"
function App() {

  const fruits = [{id:1, name:"apple" , cal:95},
                  {id:2, name:"mango", cal:150},
                  {id:3, name:"banana", cal:100},
                  {id:4, name:"kiwi", cal:50},
                  {id:5, name:"orange", cal:80}];

  const vegetables = [{id:1, name:"potato" , cal:110},
                    {id:2, name:"ladyfinger", cal:7},
                    {id:3, name:"peas", cal:1},
                    {id:4, name:"raddish", cal:40},
                    {id:5, name:"onion", cal:15}];


  return( <>
          <List item={fruits} category ="Fruits"/>
          <List item={vegetables} category ="Vegetables"/>
          </>
          );
}

export default App
