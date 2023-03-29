import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";

export default class ProductItem extends Component {
  cardTitle = "Coffee";
  btnTitle = "Buy Now !";
  render() {
    console.log(this.props);
    const { myProduct } = this.props;

    return (
      <div className="col-sm-6 col-lg-4">
        <Card>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/1684151/pexels-photo-1684151.jpeg?auto=compress&cs=tinysrgb&w=400"
          />
          <Card.Body>
            <Card.Title>{myProduct?.productName}</Card.Title>
            <Card.Text>{myProduct?.price}</Card.Text>
            <Card.Text>qunatity : {myProduct?.quantity || 0}</Card.Text>
            <Button variant="primary">{this.btnTitle}</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
