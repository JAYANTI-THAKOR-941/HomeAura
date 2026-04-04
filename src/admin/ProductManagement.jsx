import axios from "axios";
import React, { useEffect, useState } from "react";
import "./admin.css";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);

  const [open,setOpen] = useState(false);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:3000/products");
      setProducts(res.data);
    } catch (error) {
      console.log("Faild to fetch products.!!", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [products]);

  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    image: "",
  });

  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      try {
        await axios.put(`http://localhost:3000/products/${editId}`, form);
        alert("Product Updated successfully.!!");
        setForm({
          name: "",
          description: "",
          category: "",
          price: "",
          image: "",
        });
      } catch (error) {
        console.log("Faild to update product.!!", error);
      }
    } else {
      try {
        await axios.post("http://localhost:3000/products", form);
        alert("Product Added successfully.!!");
         setForm({
          name: "",
          description: "",
          category: "",
          price: "",
          image: "",
        });
      } catch (error) {
        console.log("Faild to add product.!!", error);
      }
    }
  };

  const handleEdit = (p) => {
    setEditId(p.id);
    setForm({
      name: p.name,
      description: p.description,
      price: p.price,
      category: p.category,
      image: p.image,
    });
    setOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/products/${id}`);
    } catch (error) {
      console.log("Faild to delete product.!!", error);
    }
  };

  return (
    <div>
      <button className="add-btn" onClick={()=>setOpen(true)}>Add New Product</button>

      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <h2>Product Not Found.!!</h2>
          ) : (
            products.map((p) => (
              <tr key={p.id}>
                <td>
                  <img src={p.image} alt="" />
                </td>
                <td>{p.name}</td>
                <td>{p.description}</td>
                <td>{p.price}</td>
                <td>{p.category}</td>
                <td>
                  <button onClick={() => handleEdit(p)}>Edit</button>
                  <button
                    onClick={() => handleDelete(p.id)}
                    style={{ backgroundColor: "red" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

          {open &&    <div className="form">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          onChange={handleChange}
          value={form.name}
        />
        <input
          type="text"
          name="description"
          placeholder="Product Description"
          onChange={handleChange}
          value={form.description}
        />
        <input
          type="text"
          name="price"
          placeholder="Product Price"
          onChange={handleChange}
          value={form.price}
        />
        <input
          type="text"
          name="category"
          placeholder="Product Category"
          onChange={handleChange}
          value={form.category}
        />
        <input
          type="text"
          name="image"
          placeholder="Product Image"
          onChange={handleChange}
          value={form.image}
        />
        {editId?<button onClick={handleSubmit}>Update Product</button>:<button onClick={handleSubmit}>Add New Product</button>}
        <button onClick={()=>setOpen(false)}>Cancle</button>
      </div>}
    </div>
  );
};

export default ProductManagement;
