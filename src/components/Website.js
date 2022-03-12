import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import styles from "./Website.module.css";

const Website = () => {
  return (
    <StyledWebsite
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 136.02 18.87"
    >
      <motion.path
        className={styles["cls-1"]}
        d="M63.17,18.8h2.27V.07H63.17Z"
      />
      <motion.path
        className={styles["cls-1"]}
        d="M99.51,18.8h2.27V.07H98.93l-5,5.49L88.9.07H86.05V18.8h2.27v-16l5.6,6,5.59-6Z"
      />
      <motion.path
        className={styles["cls-1"]}
        d="M39.82,18.8h2.27V.07H39.82V6.91L33.57.07H30.72V18.8H33v-16L39.82,10Z"
      />
      <motion.path
        className={styles["cls-1"]}
        d="M14.65,18.8h2.44L9.83.07H7.41L0,18.8H8.2v-2H3.32L8.48,2.86Z"
      />
      <motion.path
        className={styles["cls-1"]}
        d="M10.64,14.67,8.48,9.17l-1.87,5.5Z"
      />
      <motion.path
        className={styles["cls-1"]}
        d="M126.59,0a8.77,8.77,0,0,0-1.15.07A9.43,9.43,0,1,0,126.59,0Zm0,16.6a7.16,7.16,0,0,1-1.44-14.18,7,7,0,0,1,2.88,0,7.16,7.16,0,0,1-1.44,14.18Z"
      />
      <motion.path
        className="rainbow"
        d="M131.13,9.44a4.54,4.54,0,1,0-9.08,0Z"
      />
    </StyledWebsite>
  );
};

const StyledWebsite = styled.svg`
  display: flex;
  padding: 2rem;
  margin: 0%auto;
  max-width: 80%;
  height: 90px;
`;
export default Website;
