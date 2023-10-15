import React from 'react';
import { Card, Col, Row, Container } from 'reactstrap';
import { GithubUserType } from '../types';
import SocialLinks from './SocialLinks';
import ContactUs from './ContactUs';
import { showContactUs } from '../portfolio';

const GithubProfileCard = ({ bio, location }: GithubUserType) => {
  return (
    <Card className="section-lg bg-gradient-info shadow-lg border-0">
      <Container className="" style={{display: "flex", flexDirection: "column", alignItems: "center", paddingBottom: "100px"}}>
            <h2 style={{ textAlign: "center", color: "#525f7f", fontSize: "35px", fontWeight: "bold", display: "flex", justifyContent: "center" }}  className="text-white">Reach Out to me !</h2>
              <p className="lead text-white mt-3" style={{textAlign: "center"}}>
               I would love to hear from you ! <br/> Feel free to reach out if you want to collaborate on a project, are looking for a developer, or just want to say hi. <br/> I will reply within 24 hours <br/> See you very soon.
              </p>
              <p style={{color: "white", fontSize: '20px'}}><span style={{textDecoration: "underline"}}>My email</span> :  emmanuelowouko@gmail.com</p>
              <p style={{color: "white", fontSize: '20px'}}><span style={{textDecoration: "underline"}}>My phone</span> : +228 92 64 90 35 || +228 97 86 48 08</p>
              <SocialLinks />
      </Container>
      {showContactUs ? <ContactUs /> : null}
    </Card>
  );
};

export default GithubProfileCard;
