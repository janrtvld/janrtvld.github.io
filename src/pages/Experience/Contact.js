import React from "react";

// Animations
import { motion } from "framer-motion";
import styled from "styled-components";

const Contact = () => {
  return (
    <ContactDiv>
      <motion.h2>Contact</motion.h2>
      <ContactItem>
        <Platform>Email</Platform>
        <Content>
          <a href="mailto:rtvldjan@gmail.com">Jan Rietveld</a>
        </Content>
      </ContactItem>
      <ContactItem>
        <Platform>LinkedIn</Platform>
        <Content>
          <a
            href="https://www.linkedin.com/in/jan-rietveld/"
            target="_blank"
            rel="noreferrer"
          >
            Jan Rietveld
          </a>
        </Content>
      </ContactItem>
    </ContactDiv>
  );
};

const ContactDiv = styled.div`
  margin-top: 2rem;
  text-decoration: none;
  box-sizing: border-box;
  width: auto;
  min-width: 0em;
  padding: 20px;
  border-radius: 12px;
  border: none;
  background: var(--bg0);
  background: white;
  box-shadow: rgb(0 0 0 / 8%) 0px 12px 30px -10px;
  color: var(--c1);
  position: relative;
  overflow: hidden;
  margin-bottom: 1rem;
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: row;
  margin: 36px 0;
  @media (max-width: 600px) {
    display: block;
  }
`;

const Platform = styled.div`
  color: grey;
  margin-right: 36px;
  white-space: nowrap;
  position: relative;
  text-align: left;
  min-width: 350px;
`;

const Content = styled.div`
  flex: 1 1;
`;

export default Contact;
