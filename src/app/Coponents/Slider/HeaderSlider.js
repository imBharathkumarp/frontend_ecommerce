import React, { Fragment } from "react";
import { Button, Carousel } from "react-bootstrap";
import "./HeaderSlider.css";
function HeaderSlider() {
  return (
    <Fragment>
      <Carousel variant="dark" style={{ maxHeihgt: "650px" }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "100vh", objectFit: "cover" }}
            src="../img/slider/FATAFAT.png"
            alt="DEAL is LIVE NOW"
          />
          <Carousel.Caption className="bg-white">
            <h5>DEAL IS LIVE NOW </h5>
            <p></p>
            <div className="mb-3">
              <Button variant="dark">Shop Now</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "100vh", objectFit: "cover" }}
            src="../img/slider/young-handsome-guy-smart-suit.png"
            alt="pure mustard oil"
          />
          <Carousel.Caption className="bg-white">
            <h5>100% Cotton Men Black Suits</h5>
            <p>FATAFAT SUITS.</p>
            <div className="mb-3">
              <Button variant="dark">Shop Now</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "100vh", objectFit: "cover" }}
            src="../img/slider/blender-fruits-kitchen-space.png"
            alt="smart blender home appliance"
          />
          <Carousel.Caption className="bg-white">
            <h5>Decorate Your Smart Kitchen</h5>
            <p>FATAFAT ELECTRONICS.</p>
            <div className="mb-3">
              <Button variant="dark">Shop Now</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
}

export default HeaderSlider;
