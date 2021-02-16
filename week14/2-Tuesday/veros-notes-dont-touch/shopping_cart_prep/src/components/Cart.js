import React, { Component } from "react";
import AddProduct from "./AddProduct";
import DeleteProduct from "./DeleteProduct";
import { connect } from "react-redux";

class Cart extends Component {
  //display all of the items in the cart
  //
  render() {
    return (
      <>
        <h1 className="text-center">Shopping Cart</h1>

        <div className="row">
          <div className="col-6 offset-3">

            <AddProduct />
            
            Total Cost: ${this.props.totalCost}
            <br />
            <ul>
              {this.props.products.map((p) => {
                return (
                  <li key={p.id}>
                    {p.productName} ${p.price}
                  </li>
                );
              })}
            </ul>

          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    totalCost: state.totalCost,
    products: state.cart,
  };
};

export default connect(mapStateToProps, null)(Cart);
