import "./quantityPicker.css";
import {useState} from 'react';

const QuantityPicker = () => {
  let [quantity, setQuantity] = useState(1);
  const handleDecrease = () => {
      if(quantity>1)
        setQuantity(quantity-1);
  }
  const handleIncrease = () => {
      setQuantity(quantity+1);
  }


 

  return (<div className="quantityPicker">
    <label>Qty </label>
      
      <button className="btn btn-outline-warning btn-sm" onClick = {handleDecrease}>-</button>
      <label> {quantity} </label>
      <button className="btn btn-outline-warning btn-sm" onClick = {handleIncrease}> +</button>
    
  </div>);
};

export default QuantityPicker;