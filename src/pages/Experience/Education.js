import React from "react";

// Animations
import { motion } from "framer-motion";
import styled from "styled-components";

const Education = () => {
  return (
    <EducationDiv>
      <motion.h2>Education</motion.h2>
      <SchoolItem>
        <Duration>September 2019 - now</Duration>
        <Content>
          <div className="title">Bachelor of Science - BS, HBO-ICT</div>
          <div className="school">
            <a
              href="https://www.hu.nl/voltijd-opleidingen/hbo-ict"
              target="_blank"
              rel="noreferrer"
            >
              <i>Hogeschool Utrecht</i>
            </a>
          </div>
          <br />
        </Content>
      </SchoolItem>
      <SchoolItem>
        <Duration>September 2016 - September 2018</Duration>
        <Content>
          <div className="title">
            Bachelor of Business Administration (BBA), Bedrijfskunde MER
          </div>
          <div className="school">
            <a
              href="https://www.avans.nl/opleidingen/opleidingzoeker/bedrijfskunde-breda-voltijd-bachelor/introductie"
              target="_blank"
              rel="noreferrer"
            >
              <i>Avans University of Applied Sciences</i>
            </a>
          </div>
          <br />
        </Content>
      </SchoolItem>
    </EducationDiv>
  );
};

const EducationDiv = styled.div`
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

const SchoolItem = styled.div`
  display: flex;
  flex-direction: row;
  margin: 36px 0;
  @media (max-width: 600px) {
    display: block;
  }
`;

const Duration = styled.div`
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

export default Education;
