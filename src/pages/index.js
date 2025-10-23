import * as React from "react";
import { essays, criticism, talks } from "../content";
import { space, semanticColour, typography } from "../tokens";

const pageStyles = {
  padding: space[8],
  background: "linear-gradient(180deg, #FFB9B7 0%, #FFC8B7 100%)",
  color: semanticColour.content,
};

const sidebarStyles = {
  ...typography.lead,
  lineHeight: 1.7,
  maxWidth: 640,
  marginLeft: 0,
  marginRight: 0,
};

const quoteWrapperStyles = {
  marginBottom: 48,
  marginTop: 48,
}

const quoteStyles = {
  ...typography.quote,
  color: semanticColour.content,
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
  ...typography.lead,
  color: semanticColour.contentAlt,
  margin: 0,
  marginTop: space[1],
};

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <section style={sidebarStyles}>
        <h1 style={titleStyles}>Emma Jones writes essays, criticism and experimental non-fiction.</h1>
        <p>
          She uses art as a lens to write about feminism, baths, existentialism, zen, sex, domestic spaces, internet culture, voids and gestures.
        </p>
        <p>
          Her nature writing examines the relationship between human and landscape, with an interest in tidal spaces, mercurial creatures, rhododendrons and husbandry.
        </p>
        <p>
          Her inbox is open for questions, commissions and collaborations,{" "}
          <a href="mailto:ekj.ink@gmail.com" style={linkStyles}>
            get in touch
          </a>
          .
        </p>
      </section>
      <section style={mainSectionStyles}>
        <blockquote 
          style={sidebarStyles}
          cite="https://photomonitor.co.uk/experiment/spinning-away/"
        >
          <p style={quoteWrapperStyles}>
            <a 
              style={quoteStyles}
              href="https://photomonitor.co.uk/experiment/spinning-away/"
              target="_blank"
              rel="noreferrer"
            >
              “He checked the charts fastidiously and, for one year, ran to a lunar clock.”
            </a>
          </p>
        </blockquote>
        <blockquote
          style={sidebarStyles}
          cite="https://c4journal.com/maija-tammi-hulda-lilli/"
        >
          <p style={quoteWrapperStyles}>
            <a
              style={quoteStyles}
              href="https://c4journal.com/maija-tammi-hulda-lilli/" 
              target="_blank"
              rel="noreferrer"
            >
              “By chance, I started with Hulda. The chameleon. A predator.”
            </a>
          </p>
        </blockquote>
        <blockquote 
          style={sidebarStyles}
          cite="https://www.offassignment.com/witching-hour/emma-jones"
        >
          <p style={quoteWrapperStyles}>
            <a 
              style={quoteStyles}
              href="https://www.offassignment.com/witching-hour/emma-jones"
              target="_blank"
              rel="noreferrer"
            >
              “7 a.m. in Kelso is the smell of disinfectant and hay. It's bacon and egg sandwiches from tiny food trucks. It’s the animal heat rising soft from pens inside huge canvas tents.”
            </a>
          </p>
        </blockquote>
        <blockquote 
          style={sidebarStyles}
          cite="https://theradavist.com/zen-and-bikepacking"
        >
          <p style={quoteWrapperStyles}>
            <a 
              style={quoteStyles}
              href="https://theradavist.com/zen-and-bikepacking"
              target="_blank"
              rel="noreferrer"
            >
              “We’re in Ljubljana airport in the early afternoon and I am sat next to a nearly assembled bike and a nearly empty cardboard box.”
            </a>
          </p>
        </blockquote>
      </section>
      <section style={sidebarStyles}>
        <p>Emma has been writer in residence at the Jan Machoski Foundation, the Hugo Burge Foundation and with the New Forest National Park Authority. She was formerly Assistant Curator of Photography at Tate Modern and has been long-listed for The Observer Anthony Burgess Prize in Arts Journalism. In 2025 Emma won DYCP funding from Arts Council England.</p>
      </section>
      <section style={mainSectionStyles}>
        <h2 style={headingStyles}>Essays</h2>
        <ul style={listStyles}>
          {essays.map((item) => (
            <li key={item.url} style={{ ...listItemStyles }}>
              <p style={itemLeadStyles}>
                {item.titleUrl ? (
                  <a
                    style={linkStyles}
                    href={item.titleUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.title}
                  </a>
                ) : (
                    item.title
                )}
                {" for "}
                {item.sourceUrl ? (
                  <a
                    style={linkStyles}
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.source}
                  </a>
                ) : (
                    item.source
                )}
              </p>
            </li>
          ))}
        </ul>
        <h2 style={headingStyles}>Criticism + Reviews</h2>
        <ul style={listStyles}>
          {criticism.map((item) => (
            <li key={item.url} style={{ ...listItemStyles }}>
              <p style={itemLeadStyles}>
                {item.titleUrl ? (
                  <a
                    style={linkStyles}
                    href={item.titleUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.title}
                  </a>
                ) : (
                    item.title
                )}
                {" for "}
                {item.sourceUrl ? (
                  <a
                    style={linkStyles}
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.source}
                  </a>
                ) : (
                    item.source
                )}
              </p>
            </li>
          ))}
        </ul>
        <h2 style={headingStyles}>Interviews + Talks</h2>
        <ul style={listStyles}>
          {talks.map((item) => (
            <li key={item.url} style={{ ...listItemStyles }}>
              <p style={itemLeadStyles}>
                {item.titleUrl ? (
                  <a
                    style={linkStyles}
                    href={item.titleUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.title}
                  </a>
                ) : (
                    item.title
                )}
                {" for "}
                {item.sourceUrl ? (
                  <a
                    style={linkStyles}
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.source}
                  </a>
                ) : (
                    item.source
                )}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>EKJ</title>;
