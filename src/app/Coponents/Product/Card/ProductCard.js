import React, { Fragment } from "react";
import { Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <Fragment>
      <Link
        to={`/product/${product.id}`}
        className="text-dark text-decoration-none"
      >
        <Card className="custom-card">
          <Card.Img
            variant="top"
            className="card-img"
            src={product.image}
            alt={product.title}
          />
          <Card.Body className="card-body">
            <Card.Title className="card-title">
              {product.title.slice(0, 30)} ...
            </Card.Title>
            <Card.Text className="card-text text-capitalize">
              {product.category}
            </Card.Text>
            <h5 className="card-price">₹{product.price}</h5>
            <div className="card-rating">
              <ReactStars
                count={5}
                value={product.rating.rate}
                isHalf={true}
                emptyIcon={<i className="far fa-start"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
                size={16}
              />
              <span>({product.rating.count})</span>
            </div>
          </Card.Body>
        </Card>
      </Link>
    </Fragment>
  );
}

export default ProductCard;
