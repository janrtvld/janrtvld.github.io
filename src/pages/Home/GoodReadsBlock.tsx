import styled from "styled-components";
import { Book } from "./Book";

const GoodReadsBlock = () => {
  return (
    <RoundedCard>
      <div>
        📚 I am currently reading:{" "}
        <Book
          author="Sahil Lavingia"
          title="The Minimalist Entrepreneur: How Great Founders Do More with Less"
          link="https://www.goodreads.com/review/show/4431561017?utm_medium=cover&utm_source=email_signature"
        />
        .
      </div>
    </RoundedCard>
  );
};
export default GoodReadsBlock;

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
