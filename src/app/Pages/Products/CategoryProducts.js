import React, { Fragment, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../../Coponents/Footer/Footer";
import ProductCard from "../../Coponents/Product/Card/ProductCard";
import "./Products.css";

function CategoryProducts() {
  let { categoryName } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);
  const { products } = useSelector((state) => state.products);
  
  useEffect(() => {
    let data = products.filter((p) => p.category === categoryName);
    setCategoryProducts(data);
  }, [categoryName, products]);
  
  return (
    <Fragment>
      <Container className="products-container">
        <div className="products-header">
          <h2 className="products-title">
            Products from <span className="category-name">{categoryName}</span>
          </h2>
          <p className="products-subtitle">
            {categoryProducts.length} products found in this category
          </p>
        </div>
        
        <Row className="products-grid">
          {categoryProducts &&
            categoryProducts.map((product) => {
              return (
                <Col
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={2}
                  className="product-col"
                  key={product.id}
                >
                  <ProductCard product={product} />
                </Col>
              );
            })}
        </Row>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default CategoryProducts;
