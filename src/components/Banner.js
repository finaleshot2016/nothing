import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [text] = useState('');

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center text-dark">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__backInLeft" : ""}>
                <span className="tagline">BE PART OF</span>
                <h1>{`THE UNOWNED`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "UNOWNED" ]'><span className="wrap">{text}</span></span></h1>
                  <p className="text-dark">This is the start, <br />
We need no Shepherd.<br />
We will not follow the Bellwether.<br />
We will not become the escape of the sheeps.<br />
We are done getting scammed by these larps.<br />
We are done being the victim of these bots.<br />
We are done getting played by the snipers.<br />
We will never be Owned anymore.<br /></p>
                  <div className="row pt-12">
                  <div className="col-6"><a href="/" type="button" class="btn btn-dark btn-lg" onClick={() => console.log('connect')}>JOIN THE UNOWNED</a></div>
                  <div className="col-4"><a href="/" type="button" class="btn btn-dark btn-lg" onClick={() => console.log('connect')}>BUY $UNO</a></div>
                  </div>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomInDown" : ""}>
                  <img src={headerImg} alt="Header Img"/> 
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
