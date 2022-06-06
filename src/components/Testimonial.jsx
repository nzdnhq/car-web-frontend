import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/css/style.css";
import {Container, Row, Col, Carousel} from "react-bootstrap";

import Photo1 from "../public/img/Photo1.png";
import Photo2 from "../public/img/Photo2.png";
import Rate from "../public/img/Rate.png";

const TestimonialComponent = () => {
    return (
        <section id="testimonial" className="py-5">
            <Container className="pt-4">
                <h2 className="h2 text-center">Testimonial</h2>
                <p className="text-center py-3">Berbagai review positif dari para pelanggan kami</p>
                <Carousel className="bg-aliceblue">
                    <Carousel.Item interval={2000}>
                        <Row className="mx-4 my-5">
                            <Col lg={2} className="m-auto">
                                <img src={Photo1} className="d-block testimonial-img m-auto" alt="" />
                            </Col>
                            <Col lg={10}>
                                <img src={Rate} className="testimonial-rating" alt="" />
                                <p>
                                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit, sed do eiusmod”
                                </p>
                                <p className="testimonial-name">John Dee 32, Bromo</p>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <Row className="mx-4 my-5">
                            <Col lg={2} className="m-auto">
                                <img src={Photo2} className="d-block testimonial-img m-auto" alt="" />
                            </Col>
                            <Col lg={10}>
                                <img src={Rate} className="testimonial-rating" alt="" />
                                <p>
                                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit, sed do eiusmod”
                                </p>
                                <p className="testimonial-name">John Dee 32, Bromo</p>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <Row className="mx-4 my-5">
                            <Col lg={2} className="m-auto">
                                <img src={Photo1} className="d-block testimonial-img m-auto" alt="" />
                            </Col>
                            <Col lg={10}>
                                <img src={Rate} className="testimonial-rating" alt="" />
                                <p>
                                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit, sed do eiusmod”
                                </p>
                                <p className="testimonial-name">John Dee 32, Bromo</p>
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </section>
    );
};

export default TestimonialComponent;
