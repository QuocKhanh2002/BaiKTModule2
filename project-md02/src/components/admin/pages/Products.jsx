import React, { useEffect, useState } from "react";
import axios from "axios";
function Products() {
  const [product, setProduct] = useState([]);

  const [searchInput, setSearchInput] = useState("");

  const loadData = async () => {
    let url = "http://localhost:8000/manager-product";
    if (searchInput) {
      url += `?q=${searchInput}`;
    }
    await axios
      .get(url)
      .then((data) => setProduct(data.data))
      .catch((err) => console.log(err));
  };
  const handleDeleteProduct = async (id) => {
    await axios.delete(`http://localhost:8000/manager-product ${id}`);
    loadData();
  };
  useEffect(() => {
    loadData();
  }, [searchInput]);
  return (
    <div>
      <h1>Products</h1>
      <Link to={`/add-product`}>
        <button type="button" className="btn btn-outline-success">
          AddProduct
        </button>
      </Link>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      <table class="table table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>title</th>
            <th>description</th>
            <th>price</th>
            <th>discountPercentage</th>
            <th>rating</th>
            <th>stock</th>
            <th>brand</th>
            <th>category</th>
            <th>thumbnail</th>
            <th>images</th>
          </tr>
        </thead>
        <tbody>
          {product.map((element, index) => (
            <tr key={element.id}>
              <td>{index + 1}</td>
              <td>{element.id}</td>
              <td>{element.title}</td>
              <td>{element.description}</td>
              <td>{element.price}</td>
              <td>{element.discountPercentage}</td>
              <td>{element.rating}</td>
              <td>{element.stock}</td>
              <td>{element.brand}</td>
              <td>{element.category}</td>
              <td>{element.thumbnail}</td>
              <td>{element.images}</td>
              <td>
                <Link to={`/Edit/ ${element.id}`}>
                  {" "}
                  <button type="button">Edit</button>
                </Link>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => handleDeleteProduct(element.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
