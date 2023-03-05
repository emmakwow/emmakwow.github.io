import * as React from "react"
import {writingHighlights, talks} from '../content'
import {space, semanticColour} from '../tokens'

const pageStyles = {
  // margin: -8,
  color: semanticColour.content,
  background: semanticColour.background,
  padding: space[11],
  fontFamily: "Open Sans, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: space[16],
  maxWidth: 320,
}
const listStyles = {
  marginBottom: 36,
  paddingLeft: 0,
  listStyle: 'none',
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 20,
  maxWidth: 560,
  marginBottom: 12,
}
const linkStyles = {
  color: semanticColour.content,
}

const descriptionStyle = {
  color: semanticColour.contentAlt,
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  // lineHeight: 1.25,
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        EKJ
      </h1>
      <h2>Writing</h2>
      <ul style={listStyles}>
        {writingHighlights.map(item => (
          <li key={item.url} style={{ ...listItemStyles}}>
            <span>
              <a
                style={linkStyles}
                href={item.url}
                target="_blank"
              >
                {item.title}
              </a>
              <p style={descriptionStyle}>{item.publisher}</p>
            </span>
          </li>
        ))}
      </ul>
      <h2>Talks</h2>
      <ul style={listStyles}>
        {talks.map(item => (
          <li key={item.length} style={{ ...listItemStyles}}>
            <span>
              <p>{item.title}</p>
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
