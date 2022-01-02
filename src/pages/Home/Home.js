import styled from "styled-components";
import animoji from "../../img/animoji.png";
import { Link } from "react-router-dom";
import GoodReadsBlock from "./GoodReadsBlock";

const Home = () => {
  return (
    <div className="home">
      <RoundedBlock>
        <HomeFlex>
          <ImageFlex>
            <img alt="animoji" src={animoji}></img>
          </ImageFlex>
          <HomeText>
            <h1 style={{ margin: 0 }}>Hi, Im Jan! 👋</h1>
            <p>
              I'm a software engineering student living in the Netherlands.{" "}
            </p>
          </HomeText>
        </HomeFlex>
      </RoundedBlock>
      <HomeGrid>
        <GridColumn>
          <RoundedCard>
            <p>
              Currently working as a Software Engineering Intern @ Animo
              Solutions in Utrecht.
            </p>
            <CoolButton href="https://animo.id/" target="_blank">
              Animo
            </CoolButton>
          </RoundedCard>
          <GoodReadsBlock />
        </GridColumn>
        <GridColumn>
          <RoundedCard>
            <p>An overview of my journey so far 👇</p>
            <Link to="/experience">
              <CoolButton>My experience</CoolButton>
            </Link>
          </RoundedCard>
          <RoundedCardBlue>
            <p>Where you can reach me 📇</p>
            <CoolButton
              href="https://twitter.com/jan_rtvld"
              target="_blank"
              rel="noreferrer"
            >
              Follow me on Twitter
            </CoolButton>
            <CoolButton href="mailto:contact@janr.xyz" rel="noreferrer">
              Send me an Email
            </CoolButton>
            <CoolButton
              href="https://www.linkedin.com/in/jan-rietveld/"
              target="_blank"
              rel="noreferrer"
            >
              Checkout my LinkedIn
            </CoolButton>
          </RoundedCardBlue>
        </GridColumn>
      </HomeGrid>
    </div>
  );
};

const CoolButton = styled.a`
  color: black;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 42px;
  margin-top: 0.75rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;

  border-radius: 12px;
  background: #ededed;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
`;

const HomeGrid = styled.div`
  display: flex;
  margin-left: -22px;
  width: auto;
  @media (max-width: 400px) {
    display: block;
  }
`;

const GridColumn = styled.div`
  padding-left: 22px;
  background-clip: padding-box;
`;

const RoundedCard = styled.div`
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
  width: 400px;
  overflow: hidden;
  margin-bottom: 1rem;
`;

const RoundedCardBlue = styled.div`
  text-decoration: none;
  box-sizing: border-box;
  width: auto;
  min-width: 0em;
  padding: 20px;
  border-radius: 12px;
  border: none;
  background: #94c1f2;
  box-shadow: rgb(0 0 0 / 8%) 0px 12px 30px -10px;
  color: var(--c1);
  position: relative;
  width: 400px;
  overflow: hidden;
  margin-bottom: 1rem;
`;

const RoundedBlock = styled.div`
  background: white;
  box-sizing: border-box;
  width: 800px;
  min-width: 0em;
  margin: 0;
  width: 100%;
  margin-bottom: 22px;
  padding: 1.5rem;
  border-radius: 12px;
  border: none;
  box-shadow: rgb(0 0 0 / 8%) 0px 12px 30px -10px;
  color: var(--c1);
  position: relative;
  img {
    position: absolute;
    inset: 0px;
    box-sizing: border-box;
    padding: 0px;
    border: none;
    margin: auto;
    display: block;
    width: 0px;
    height: 0px;
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`;

const ImageFlex = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 60px;
  overflow: hidden;
  flex: 0 0 auto;
  margin: 0;
  margin-right: 1rem;
`;

const HomeText = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: center;
  margin: 0;
`;

const HomeFlex = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

export default Home;
