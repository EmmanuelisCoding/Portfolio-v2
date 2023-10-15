import React, { useEffect } from 'react';
import { greetings } from '../portfolio';
import { Button, Container, Row, Col } from 'reactstrap';
import GreetingLottie from '../components/DisplayLottie';
import SocialLinks from '../components/SocialLinks';
import Typed from "react-typed";

const Greetings = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement!.scrollTop = 0;
  });

 const date = new Date().getFullYear();

  return (
    <main style={{minHeight: "100vh"}}>
      <div>
        <div className="position-relative">
          <section className="section section-lg section-shaped pb-250" style={{minHeight: "100vh"}}>
            <div className="shape shape-style-1 bg-gradient-info" style={{minHeight: "100vh"}}>
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="py-lg-md d-flex">
              <div className="col px-0">
                <Row>
                  <Col lg="6">
                    <div>
                      <div style={{fontSize: '25px', color: "white"}}>Hello there, </div>
                      <div style={{fontSize: '25px', fontWeight: "bold", color: "#5df512"}}>You got a vision for an amazing web project ?</div>
                      <div style={{fontSize: '25px', color: "white"}}>Say no more !</div>
                      <div></div>
                    </div>
                    <h5 className="display-3 text-white" style={{marginBottom: "0px", paddingTop: "10px"}}>
                      <span>I am <strong style={{fontWeight: "bold" }}>{greetings.name}</strong>,</span>
                    </h5>
                    <p style={{color: "", fontWeight: "bold", fontSize: "40px", padding: "0px", margin: "0px"}}>
                      <strong style={{padding: "0px", margin: "0px"}}>
                        <Typed
                          strings={[
                            "Web Developer", "Frontend Developer", "Software Engineer"
                          ]}
                          typeSpeed={50}
                          backDelay={1100}
                          backSpeed={30}
                          loop
                        />
                      </strong>
                    </p>
                    <p style={{marginTop: "0px", fontSize: "23px", fontWeight: "400"}} className="lead text-white">As a Web Developer with {date - 2019} years of experience, my mission is to make your vision a reality.</p>
                    <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
                      <SocialLinks />
                      {greetings.resumeLink && (
                        <div className="btn-wrapper my-4">
                          <Button
                            className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                            color="default"
                            href={greetings.resumeLink}
                          >
                            <span className="btn-inner--icon mr-1">
                              <i className="fa fa-file" />
                            </span>
                            <span className="btn-inner--text">See My Resume</span>
                          </Button>
                        </div>
                      )}
                    </div>
                  </Col>
                  <Col lg="6">
                    <GreetingLottie animationPath="/lottie/coding.json" />
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
          </section>
          {/* 1st Hero Variation */}
        </div>
      </div>
    </main>
  );
};

export default Greetings;
