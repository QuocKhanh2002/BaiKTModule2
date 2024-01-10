import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();
  const [formInput, setFormInput] = useState({
    id: "",
    title: "",
    edescriptionmail: "",
    price: "",
    discountPercentage: "",
    rating: "",
    stock: "",
    brand: "",
    category: "",
    thumbnail: "",
    images: "",
  });

  const {
    id,
    title,
    edescriptionmail,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images,
  } = formInput;
  const handleChangeInput = (e) => {
    setFormInput({ ...formInput, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/manager-product", formInput);
    navigate("/");
  };

  return (
    <div>
      <div className="w-70 p-5 shadow mx-auto">
        <button onClick={() => navigate(-1)}>Back</button>

        <h3>Add Product</h3>

        <form onSubmit={handleSubmit}>
          <label>id: </label>
          <input
            type="text"
            name="id"
            value={id}
            onChange={handleChangeInput}
          />
          <br />

          <label>title: </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChangeInput}
          />
          <br />

          <label>edescriptionmail: </label>
          <input
            type="text"
            name="edescriptionmail"
            value={edescriptionmail}
            onChange={handleChangeInput}
          />
          <br />

          <label>price: </label>
          <input
            type="text"
            name="price"
            value={price}
            onChange={handleChangeInput}
          />
          <br />
          <label>discountPercentage: </label>
          <input
            type="text"
            name="discountPercentage"
            value={discountPercentage}
            onChange={handleChangeInput}
          />
          <br />
          <label>rating: </label>
          <input
            type="text"
            name="rating"
            value={rating}
            onChange={handleChangeInput}
          />
          <br />
          <label>stock: </label>
          <input
            type="text"
            name="stock"
            value={stock}
            onChange={handleChangeInput}
          />
          <br />
          <label>brand: </label>
          <input
            type="text"
            name="brand"
            value={brand}
            onChange={handleChangeInput}
          />
          <br />
          <label>category: </label>
          <input
            type="text"
            name="category"
            value={category}
            onChange={handleChangeInput}
          />
          <br />
          <label>thumbnail: </label>
          <input
            type="text"
            name="thumbnail"
            value={thumbnail}
            onChange={handleChangeInput}
          />
          <br />
          <label>images: </label>
          <input
            type="text"
            name="images"
            value={images}
            onChange={handleChangeInput}
          />
          <br />

          <button type="submit" className="btn btn-success">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
