function List(props){

    const category = props.category;
    const Itemlist = props.item;

    //fruits.sort((a ,b) => a.name.localeCompare(b.name));
    //fruits.sort((a,b) => a.cal - b.cal);

    //const lowcalfruits = fruits.filter(fruits => fruits.cal < 100 );
    //const Listitem = lowcalfruits.map(lowcalfruits=> <li key={lowcalfruits.id}>{lowcalfruits.name}: &nbsp; <b>{lowcalfruits.cal}</b></li>);
    const Listitem = Itemlist.map(item=> <li key={item.id}>{item.name}: &nbsp; <b>{item.cal}</b></li>);
    return( <>
            <h3 className="item-category">{category}</h3>
            <ol className="item-list">{Listitem}</ol>
            </>
            );

} 
export default List