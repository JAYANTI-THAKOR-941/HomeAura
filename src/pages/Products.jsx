import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './main.css';
import { useNavigate } from 'react-router-dom';

const Products = () => {


  const navigate = useNavigate();

  const [products,setProducts] = useState([]);


  const fetchProducts = async()=>{
    try{
      const res = await axios.get('http://localhost:3000/products');
      setProducts(res.data);
    }
    catch(error){
      console.log('Faild to fetch products.!!',error);
    }
  }

  useEffect(()=>{
    fetchProducts();
  },[products])


   return (
    <div className='product-container'>
        {
          products.map((p)=>(
            <div className="product-card" key={p.id}>
              <img src={p.image} alt="" />
              <div className="product-info">
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <p>Price:₹{p.price}</p>
                <div className="bottom">
                  <p>{p.category}</p>
                  <div className="btn">
                    <button onClick={()=>navigate(`/product/${p.id}`)}>View Details</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
    </div>
  )
}

export default Products