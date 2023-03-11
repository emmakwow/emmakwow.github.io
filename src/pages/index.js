import * as React from "react";
import { writing, talks, curation } from "../content";
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
  maxWidth: 560,
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
          I'm a non-fiction and arts writer with a focus on photography. I’ve
          worked with contemporary artists on profiles of their work and am a
          contributing reviewer of photobooks with <i>C4 Journal</i>.
          Occasionally I write more personal essays, often taking art or
          literature as a starting point.
        </p>
        <p>
          I like to collaborate. You can contact me by{" "}
          <a href="mailto:ekj.ink@gmail.com" style={linkStyles}>
            email
          </a>{" "}
          or (for my sins) on{" "}
          <a
            href="https://twitter.com/PerceptiveHow"
            target="_blank"
            rel="noreferrer"
            style={linkStyles}
          >
            twitter
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
        <h2 style={headingStyles}>Curation</h2>
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
        </ul>
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
