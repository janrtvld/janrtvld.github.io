import React from "react";

// Animations
import { motion } from "framer-motion";
import styled from "styled-components";

const WorkExperience = () => {
  return (
    <ExperienceDiv>
      <motion.h2>Work Experience</motion.h2>
      <WorkItem>
        <Duration>August 2021 — now</Duration>
        <Content>
          <div className="title">
            Software Engineering Intern @{" "}
            <a href="https://animo.id/" target="_blank" rel="noreferrer">
              <i>ANIMO</i>
            </a>
          </div>
        </Content>
      </WorkItem>
      <WorkItem>
        <Duration>February 2021 — August 2021</Duration>
        <Content>
          <div className="title">
            Junior Full Stack Developer @{" "}
            <a href="https://telematiqs.com/" target="_blank" rel="noreferrer">
              <i>TelematiQs</i>
            </a>
          </div>
        </Content>
      </WorkItem>
      <WorkItem>
        <Duration>February 2020 — January 2021</Duration>
        <Content>
          <div className="title">
            Warehouse worker @{" "}
            <a
              href="https://www.hoogenboezem.nl/"
              target="_blank"
              rel="noreferrer"
            >
              <i>Hoogenboezem</i>
            </a>
          </div>
        </Content>
      </WorkItem>
      <WorkItem>
        <Duration>Januari 2016 — Augustus 2019</Duration>
        <Content>
          <div className="title">
            Production planner @{" "}
            <a href="https://www.rietveld.nl/" target="_blank" rel="noreferrer">
              <i>Rietveld BV</i>
            </a>
          </div>
        </Content>
      </WorkItem>
    </ExperienceDiv>
  );
};

const ExperienceDiv = styled.div`
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

const WorkItem = styled.div`
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

export default WorkExperience;
