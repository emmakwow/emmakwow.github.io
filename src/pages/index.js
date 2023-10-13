import * as React from "react";
import { writing, talks } from "../content";
import { space, semanticColour, typography } from "../tokens";

const pageStyles = {
  padding: space[8],
  background: "linear-gradient(180deg, #FFB9B7 0%, #FFC8B7 100%)",
  color: semanticColour.content,
};

const sidebarStyles = {
  ...typography.body,
  lineHeight: 1.7,
  maxWidth: 640,
};

const mainSectionStyles = {};

const titleStyles = {
  ...typography.title,
  marginTop: 0,
  marginBottom: space[5],
};

const headingStyles = {
  ...typography.heading,
  marginTop: space[10],
};

const listStyles = {
  paddingLeft: 0,
  listStyle: "none",
};

const listItemStyles = {
  maxWidth: 520,
  marginBottom: space[5],
};

const itemLeadStyles = {
  ...typography.lead,
  margin: 0,
  marginBottom: 0,
};

const linkStyles = {
  color: semanticColour.content,
};

const descriptionStyle = {
  ...typography.body,
  color: semanticColour.contentAlt,
  margin: 0,
  marginTop: space[1],
};

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <section style={sidebarStyles}>
        <h1 style={titleStyles}>EKJ</h1>
        <p>
          I'm Emma and I'm an essayist. Published work includes reviews, art
          writing, travel writing and memoir. Occasionally, I try to blend
          different elements from all of these. In September 2023, I was writer
          in residence at Marchmont House in Duns, Scottish Borders.
        </p>
        <p>
          My writing is often led by an interest in a particular artist's
          practice or work of art, and I enjoy collaborating on new projects. If
          you're an artist, or a gallery looking for some copywriting work (or
          if you just want to chat!) you can{" "}
          <a href="mailto:ekj.ink@gmail.com" style={linkStyles}>
            contact me by email here
          </a>
          .
        </p>
      </section>
      <section style={mainSectionStyles}>
        <h2 style={headingStyles}>Writing</h2>
        <ul style={listStyles}>
          {writing.map((item) => (
            <li key={item.url} style={{ ...listItemStyles }}>
              <p style={itemLeadStyles}>
                <a
                  style={linkStyles}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.title}
                </a>
              </p>
              <p style={descriptionStyle}>{item.publisher}</p>
            </li>
          ))}
        </ul>
        {/*<h2 style={headingStyles}>Curation</h2>
        <ul style={listStyles}>
          {curation.map((item) => (
            <li key={item.url} style={{ ...listItemStyles }}>
              <p style={itemLeadStyles}>
                <a
                  style={linkStyles}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.title}
                </a>
              </p>
              <p style={descriptionStyle}>
                {item.role}, {item.institution}
              </p>
            </li>
          ))}
        </ul>*/}
        <h2 style={headingStyles}>Talks</h2>
        <ul style={listStyles}>
          {talks.map((item) => (
            <li key={item.institution.length} style={{ ...listItemStyles }}>
              <span>
                <p style={itemLeadStyles}>{item.title}</p>
                <p style={descriptionStyle}>{item.institution}</p>
              </span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>EKJ</title>;
