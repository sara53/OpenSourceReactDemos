import React, { useEffect, useState } from "react";
import "./products.css";
import { Table } from "react-bootstrap";
import { productsAPI } from "../API/Products";
import { useNavigate } from "react-router-dom";

export function Products() {
  const navigate = useNavigate();
  let [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    let response = await productsAPI.getAllProducts();
    setProducts(response.data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const viewProduct = (productId) => {
    navigate(`/products/${productId}`);
  };
  const deleteProduct = async (productId) => {
    await productsAPI.deleteProduct(productId);
    let filteredList = products.filter((product) => product.id != productId);
    setProducts(filteredList);
  };
  const editProduct = (productId) => {
    navigate(`/products/${productId}/edit`);
  };

  const goToAddPage = () => {
    navigate("/products/0/edit");
  };
  return (
    <div className="customBg p-5 text-light text-center">
      <h1>Products</h1>
      <div className="container">
        <div className="col-10"></div>
        <div className="col-2 mb-5">
          <i
            onClick={goToAddPage}
            className="fs-1 text-primary  bi bi-plus-square-fill"
          ></i>
        </div>
        <Table bordered className="text-light">
          <thead>
            <tr>
              <th>Id</th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Qunatity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.productName}</td>
                  <td>{product.price}$</td>
                  <td>{product.quantity}</td>
                  <td>
                    <i
                      onClick={() => viewProduct(product.id)}
                      className="fs-2 mx-2 text-warning bi bi-eye-fill"
                    ></i>
                    <i
                      onClick={() => deleteProduct(product.id)}
                      className="fs-2 mx-2 text-danger bi bi-trash"
                    ></i>
                    <i
                      onClick={() => editProduct(product.id)}
                      className="fs-2 mx-2 text-info bi bi-pencil-square"
                    ></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
