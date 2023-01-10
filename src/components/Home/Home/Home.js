import React from "react";
import { Row, Col, Container, Accordion } from "react-bootstrap";
import Destinations from "../Destinations/Destinations";
import Banner from "../Banner/Banner";
import Progress from "../Progress/Progress";
import Review from "../Review/Review";
import question from "../../../images/question.jpg";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Destinations></Destinations>
      <Progress></Progress>
      <Review></Review>
      <div className="questions">
        <Container>
          <h3 className="mb-5 mt-5">Frequently Asked Questions</h3>
          <Row>
            <Col xs={12} md={6} lg={6}>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>How can I cancel a tour?</Accordion.Header>
                  <Accordion.Body>
                    There is a menu named my orders where user can see their
                    booking and there is a option for cancel the order, user can
                    easily their order clicking the cancel button. Also you know
                    our service is available for 24/7, 24 hours a day and 7 days
                    a week. So you can call our support section or message us
                    directly for canceling.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Which countries are included in your tour plan?
                  </Accordion.Header>
                  <Accordion.Body>
                    Right Now, Bangladesh, India, Singapore, Australia, USA,
                    UAE, France, Indonesia, Maldives etc are included in our
                    tour plan.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    How many people do you allow for a specific tour?
                  </Accordion.Header>
                  <Accordion.Body>
                    It depends on the place, season and many other things. If
                    you want to see if there is a opportunity or not, you can
                    check our website or directly message us.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <img src={question} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
