import React, {useState} from "react";

function App() {
  const [name , setName] = useState("Name");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  function NameOnchangeHandle(event){
    setName(event.target.value);
  }
  function QuantityOnchangeHandle(event){
    setQuantity(event.target.value);
  }
  function CommentOnchangeHandle(event){
    setComment(event.target.value);
  }
  function PaymentOnchangeHandle(event){
    setPayment(event.target.value);
  }
  function ShippingOnchangeHandle(event){
    setShipping(event.target.value);
  }

  return(
    <div>
      <input value={name} onChange={NameOnchangeHandle} />
      <p>Name:{name}</p>
      <input value={quantity} onChange={QuantityOnchangeHandle} type="Number" />
      <p>Quantity:{quantity}</p>
      <textarea value={comment} onChange={CommentOnchangeHandle} placeholder="Dont comment"></textarea>
      <p>Comment:{comment}</p>
      <select value={payment} onChange={PaymentOnchangeHandle}>
        <option>Select a option</option>
        <option>Netbanking</option>
        <option>UPI</option>
        <option>Credit/debit card</option>
      </select>
      <p>Payment Method:{payment}</p>
      <label >
        <input type="radio" value="takeaway" checked={shipping==="takeaway"} onChange={ShippingOnchangeHandle}/>
        takeaway
      </label>
      <label ><br/>
        <input type="radio" value="diliver" checked={shipping==="diliver"} onChange={ShippingOnchangeHandle}/>
        diliver
      </label>
      <p>Shipping:{shipping}</p>
    </div>
  );
  
}

export default App
