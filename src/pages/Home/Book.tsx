import React from "react";

interface Props {
  author: string;
  title: string;
  link: string;
}

export const Book: React.FC<Props> = ({ author, title, link }) => {
  return (
    <div className="book" style={{ display: "inline" }}>
      <a rel="nofollow" href={link}>
        {title}
      </a>{" "}
      by {author}
    </div>
  );
};
