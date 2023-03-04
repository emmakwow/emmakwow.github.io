import * as React from "react"
import {writingHighlights} from '../content/writing'
import {talks} from '../content/talks'

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
  listStyle: 'none',
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 20,
  maxWidth: 560,
  marginBottom: 12,
}

const descriptionStyle = {
  opacity: 0.7,
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
                // style={linkStyle}
                href={item.url}
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
