import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class Products extends Component {
  productsList = [
    {
      id: 1,
      productName: "Laptop",
      price: "300$",
      quantity: 3,
    },
    {
      id: 2,
      productName: "Sumsung",
      price: "400$",
      quantity: 1,
    },
    {
      id: 3,
      productName: "Iphone",
      price: "500$",
      quantity: 7,
    },
    {
      id: 4,
      productName: "book",
      price: "500$",
      quantity: 7,
    },
    {
      id: 5,
      productName: "New Product",
      price: "500$",
      quantity: 7,
    },
  ];
  render() {
    return (
      <div className="bg-light p-5 text-center rounded">
        <div className="container">
          <h2 className="bg-secondary mb-2 p-3">Our Products </h2>
          <div className="row">
            {this.productsList.map((item, index) => {
              return <ProductItem key={item.id} myProduct={item} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
