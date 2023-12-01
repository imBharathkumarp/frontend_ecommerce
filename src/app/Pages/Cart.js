import React, { Fragment } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItemCard from "../Coponents/Cart/CartItemCard";
import Footer from "../Coponents/Footer/Footer";
import { subTotalPrice, totalPrice, totalTax } from "../Features/Cart/CartSelector";
import { cartState } from "../Features/Cart/CartSlice";
import axios from 'axios';

function Cart() {
  let state = useSelector((state) => state);
  let { carts } = useSelector(cartState);
  const subTotal = subTotalPrice(state);
  const tax = totalTax(state);
  const totalAmmount = totalPrice(state);

  const handlePost = () => {
    axios.post('http://localhost:5000/register', { subTotal, tax, totalAmmount })
      .then((response) => {
        const result = response.data;
        if (result) {
          alert("Data saved successfully");
        }
      })
      .catch((error) => {
        console.error("POST request error:", error);
        alert("Something went wrong when saving data.");
      });
  }

  return (
    <Fragment>
      <Container>
        <Row>
          {!carts.length && (
            <div className="w-100 my-5 text-center text-danger">
              <h3>
                You don't have any product in carts.{" "}
                <Link to="/products" className="text-dark text-decoration-none">
                  {" "}
                  Go for shopping{" "}
                </Link>
              </h3>
            </div>
          )}
          {carts.length > 0 &&
            carts.map((c) => {
              return (
                <Col sm="12" lg="12" key={c.id}>
                  <CartItemCard item={c} />
                </Col>
              );
            })}
        </Row>

        {carts.length > 0 && (
          <div className="my-3">
            <Card>
              <Card.Body>
                <div className="d-flex justify-content-around">
                  <div className="w-100 align-middle">
                    <h5 className="align-middle d-inline">
                      Subtotal: ${subTotal}
                    </h5>
                  </div>
                  <div className="w-100 ">
                    <h5 className="align-middle d-inline">Tax(2%): ${tax}</h5>
                  </div>
                  <div className="w-100 align-middle">
                    <h5 className="align-middle d-inline">
                      Total Price: ${totalAmmount.toFixed(2)}
                    </h5>
                  </div>
                  <div className="w-100 text-center">
                    <button
                      onClick={handlePost}
                      className="btn btn-primary w-30" 
                    >
                      Post
                    </button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        )}
      </Container>
      <Footer />
    </Fragment>
  );
}

export default Cart;
