import "./catalog.css";
import Product from "./product";
import DataService from "../services/dataService";
import { useEffect, useState } from 'react';

const Catalog = () => {
    let[product, setProducts] = useState([]);
    const loadCatalog = () => {
        console.log("Data Retrieved");
        let service = new DataService();
        let data = service.getCatalog();
        setProducts(data);
    };

    useEffect( () => {
        loadCatalog();
    }

    );

    return (
        <div className="catalog">
            <h1>The Vacation Outfits Catalog</h1>

            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            
            

        </div>
    );
 
    };

export default Catalog;