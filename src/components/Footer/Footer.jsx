import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import "../../styles/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Tasty Treat</h5>
              <h5>1:04</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
                quos.
              </p>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="delivery__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00 am - 11:00 pm</p>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Saturday - Sunday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="delivery__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <p>Location: Jam Kanda Goth Bin Qasim Town Malir Karachi</p>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Phone:+9232839238292</span>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Mail:sarfarazahmed1012@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe to our newletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i className="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <p className="copyright">
              Copyright - 2023, website made by Sarfaraz Ahmed. All rights
              reserved
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex gap-2 align-items-center justify-content-end">
              <p className="m-0">Follow: </p>
              <span>
                <Link className="link" to="https://www.facebook.com">
                  <i className="ri-facebook-line"></i>
                </Link>
              </span>
              <span>
                <Link className="link" to="https://www.github.com">
                  <i className="ri-github-line"></i>
                </Link>
              </span>
              <span>
                <Link className="link" to="https://www.linkedin.com">
                  <i className="ri-linkedin-line"></i>
                </Link>
              </span>
              <span>
                <Link className="link" to="https://www.instagram.com">
                  <i className="ri-instagram-line"></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
