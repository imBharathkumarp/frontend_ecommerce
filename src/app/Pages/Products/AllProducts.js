import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Footer from "../../Coponents/Footer/Footer";
import ProductCard from "../../Coponents/Product/Card/ProductCard";
import "./Products.css";

function AllProducts() {
  const { products } = useSelector((state) => state.products);
  return (
    <Fragment>
      <Container className="products-container">
        <div className="products-header">
          <h2 className="products-title">All Products</h2>
          <p className="products-subtitle">Discover our complete collection</p>
        </div>
        
        <Row className="products-grid">
          {products &&
            products.map((p) => {
              return (
                <Col xs={12} sm={6} md={4} lg={3} xl={2} className="product-col" key={p.id}>
                  <ProductCard product={p} />
                </Col>
              );
            })}
        </Row>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default AllProducts;
