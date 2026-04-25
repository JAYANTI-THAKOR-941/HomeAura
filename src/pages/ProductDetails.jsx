import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/products/${id}`);
      setProduct(res.data);
    } catch (error) {
      console.log("Faild to fetch product details.!", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (!product) return <h2>Product not found.!!</h2>;
  return (
    <div>
      <img src={product.image} style={{ width: "500px" }} alt="" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price:₹{product.price}</p>
      <button
        onClick={() => {
          (dispatch(addToCart(product)), navigate("/cart"));
        }}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductDetails;
