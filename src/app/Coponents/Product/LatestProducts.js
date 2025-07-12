import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import ProductCard from "./Card/ProductCard";
import "./LatestProducts.css";

function LatestProducts() {
  const { products } = useSelector((state) => state.products);
  return (
    <Container className="latest-products-container my-4">
      <div className="latest-products-header">
        <h3 className="latest-products-title">Latest Products</h3>
        <p className="latest-products-subtitle">Discover our newest arrivals</p>
      </div>
      <Row className="latest-products-grid">
        {products &&
          products.slice(0, 6).map((p) => {
            return (
              <Col xs={12} sm={6} md={4} lg={2} className="product-col" key={p.id}>
                <ProductCard product={p} />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
}

export default LatestProducts;
