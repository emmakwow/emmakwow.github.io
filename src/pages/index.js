import * as React from "react"
import {writingHighlights, talks} from '../content'
import {space, semanticColour, typography} from '../tokens'

const pageStyles = {
  padding: space[8],
  background: "linear-gradient(180deg, #FFB7BB 0%, #FFC8B7 100%)",
  color: semanticColour.content,
}

const titleStyles = {
  ...typography.title,
  marginTop: 0,
  marginBottom: space[8],
}

const headingStyles = {
  ...typography.heading,
  marginTop: space[10]
}

const listStyles = {
  paddingLeft: 0,
  listStyle: 'none',
}

const listItemStyles = {
  maxWidth: 560,
  marginBottom: space[5]
}

const itemLeadStyles = {
  ...typography.lead,
  margin: 0,
  marginBottom: 0,
}

const linkStyles = {
  color: semanticColour.content,
}

const descriptionStyle = {
  ...typography.body,
  color: semanticColour.contentAlt,
  margin: 0,
  marginTop: space[1],
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={titleStyles}>
        EKJ
      </h1>
      <h2 style={headingStyles}>Writing</h2>
      <ul style={listStyles}>
        {writingHighlights.map(item => (
          <li key={item.url} style={{ ...listItemStyles}}>
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
      <h2 style={headingStyles}>Talks</h2>
      <ul style={listStyles}>
        {talks.map(item => (
          <li key={item.institution.length} style={{ ...listItemStyles}}>
            <span>
              <p style={itemLeadStyles}>{item.title}</p>
              <p style={descriptionStyle}>{item.institution}</p>
            </span>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>EKJ</title>
