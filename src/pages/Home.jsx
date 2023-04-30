import React from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../styles/hero-section.css";

import heroImg from "../assets/images/hero.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <Helmet title="home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy way to make an order</h5>
                <h1 className="hero__title mb-4">
                  <span>Hungry? 118</span> Just wait <br /> for the food{" "}
                  <span>at your door!</span>
                </h1>
                <p>
                  Welcome! We offer a hassle-free ordering experience that
                  allows you to enjoy delicious food from the comfort of your
                  own home. Simply browse our menu, place your order, and wait
                  for our speedy delivery team to bring your meal straight to
                  your door. Satisfaction guaranteed!
                </p>
                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Order now
                    <i className="ri-arrow-right-s-line"></i>
                  </button>
                  <button className="all__foods-btn">
                    <Link className="link" to="/foods">
                      See all foods
                    </Link>
                  </button>
                </div>
                <div className="hero__service d-flex align-items-center gap-5 mt-5">
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-car-line"></i>
                    </span>
                    No shipping charges
                  </p>
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-shield-check-line"></i>
                    </span>
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
