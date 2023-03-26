import React from 'react'
import CommonSection from './CommonSection'
import Helmet from '../../frontend_services/Helmet';
import AboutSection from './AboutSection'
import { Container,Row,Col } from 'reactstrap';
import driveImg from "../../assets/all-images/drive.jpg"

const About = () => {
  return (
   <Helmet title='About'>
    <CommonSection title="About Us"/> 
    <AboutSection/>
    <section className="about__page-section">
    <Container>
      <Row>
        <Col lg='6' md='6' sm='12'>
          <div className="about__page-img">
          <img src={driveImg} alt="" className="w-100 rounded-3"/>
          </div>
        </Col>
        <Col lg='6' md='6' sm='12'>
          <div className="about__page-content">
            <h2 className="section__title">We Are Comitted To Provide
            Safe Ride Solution</h2>

            <p className="section__description">
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum facilis optio temporibus quisquam similique perspiciatis dolore quos est debitis exercitationem
            </p>

            <p className="section__description">
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum facilis optio temporibus quisquam similique perspiciatis dolore quos est debitis exercitationem
            </p>

            <div className="d-flex align-items-center gap-3 mt-4">
              <span><i class="ri-phone-line"></i></span>

              <div>
                <h6 className="section__subtitle">Need Any Help? </h6>
                <h4>+91 7978797141</h4>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>

    </section>
   </Helmet>
  )
}

export default About;
