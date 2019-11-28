import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-self: center;
  padding: 0 17.5vw 100px;
  background-image: url("assets/papers.jpg");
  background-size: cover;
  background-position: center;
  opacity: 0.9;
`;

const Items = styled.section`
  display: inherit;
  flex-flow: column nowrap;
  align-items: center;
  margin-top: 50px;
  border-radius: 5px;
  background: white;
  padding: 30px 80px;
  box-shadow: 4px 4px 2px;
`;

const Heading = styled.h2`
  font-family: Caveat;
  margin-bottom: 20px;
`;

const List = styled.ul`
  margin-top: 20px;
`;

const Services = () => (
  <Wrapper>
    <Items>
      <h1 style={{ fontFamily: "Caveat", marginBottom: "20px" }}>
        Our Services
      </h1>
      <p>
        Preparing for overseas education is never an easy task. On top of
        college admission applications, visa applications, English examinations,
        courses registrations, there are numerous other miscellaneous tasks
        including accommodation, transportation, medical insurance, bank account
        setup. Students will no doubt feel overwhelmed and intimidated. Ameria
        provides follow up services in both Hong Kong and United States to
        ensure every student is taken care of, you can always find us anytime,
        anywhere. Our services include but are not limited to the following:
      </p>
    </Items>

    <Items>
      <Heading>Academic Couseling</Heading>
      <p>
        Schedule a one-on-one meeting with us to talk about your academic goal,
        career aspirations, budget and other concerns. It’s always free.
      </p>
    </Items>

    <Items>
      <Heading>Application Management</Heading>
      <p>
        Ameria will help you to manage all your applications, starting from
        gathering application materials, following up on application status, to
        receiving visas and school offers.
      </p>
      <List>
        <li>College Admission</li>
        <li>Student Visa</li>
        <li>English Examinations (TOEFL, IELTS)</li>
      </List>
    </Items>

    <Items>
      <Heading>Other Services</Heading>
      <p>
        We have dedicated staff in the United States to handle all our clients'
        needs including but not limited to:
      </p>
      <List>
        <li>Off-campus Housing</li>
        <li>Flight Arrangement</li>
        <li>Medical Insurance</li>
        <li>Transportation</li>
        <li>Banking</li>
        <li>Telecommunications</li>
        <li>OnlineCounseling (Coming Soon!)</li>
      </List>
    </Items>

    <Items>
      <Heading>Application Process and Timeline</Heading>
      <div style={{ width: "100%" }}>
        <img
          style={{ width: "100%" }}
          src="assets/timeline.png"
          alt="timeline"
        />
      </div>
    </Items>
  </Wrapper>
);

export default Services;
