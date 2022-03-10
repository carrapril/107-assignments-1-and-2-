import "./product.css";
import QuantityPicker from './quantityPicker';

const Product = () => {
    return (
        <div className="product">
            <img src="https://picsum.photos/200/300" alt="product image"></img>
            <h3>Dubai Vaction Outfit</h3>
            <label>Price: $59.99</label>
            <label> Total: $64.99</label>
            <QuantityPicker></QuantityPicker>
            <button className="btn btn-warning">Add</button> 
            
            
        </div>
    );
 
    };

export default Product;