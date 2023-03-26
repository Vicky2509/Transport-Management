import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../Frontend CSS/about-section.css";
import aboutImg from '../../assets/all-images/bus3.jpg'
const AboutSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content"></div>
            <h4 className="section__subtitle">About Us</h4>
            <h2 className="section_title">Easy Commute</h2>
            <p className="section__description">
              Safety and added comfort, both are the prime concerns of Centurion
              University. To bestow with the same, the fleet of University buses
              provide pick and drop facility to students coming from within a
              radial distance of 50Kms. The buses are modern to give a
              comfortable travelling experience.The buses run on specific routes
              covering more than 60% of the city besides connects to the prime
              locations of the city.The bus timings are synchronized with the
              schedule of the University.
            </p>


            <div className="about__section-item d-flex align-items-center">
             <p className="section__description d-flex align-items-center gap-2">
             <i class="ri-checkbox-circle-line"></i>Safety and added comfort, both are the prime concerns of Centurion

             </p>

             <p className="section__description d-flex align-items-center gap-2">
             <i class="ri-checkbox-circle-line"></i>Safety and added comfort, both are the prime concerns of Centurion

             </p>
            </div>


            <div className="about__section-item d-flex align-items-center">
             <p className="section__description d-flex align-items-center gap-2">
             <i class="ri-checkbox-circle-line"></i>Safety and added comfort, both are the prime concerns of Centurion

             </p>

             <p className="section__description d-flex align-items-center gap-2">
             <i class="ri-checkbox-circle-line"></i>Safety and added comfort, both are the prime concerns of Centurion

             </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt=""  className="w-100"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
