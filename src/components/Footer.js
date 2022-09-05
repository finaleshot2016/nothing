import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/nav-logo1.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer pt-4">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <a href="/"><img src={logo} alt="Logo" /></a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://twitter.com/TheUnownedERC20" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="https://medium.com/@TheUnowned/unowned-e2080fb81d8e" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2022. UNOWNED</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
