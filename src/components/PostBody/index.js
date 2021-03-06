import React from "react"
import styled from "styled-components"

const PostBody = ({ html }) => {
  return <Container dangerouslySetInnerHTML={{ __html: html }} />
}

const Container = styled.div`
  h1:not(:first-child),
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-top: 2rem;
  }

  p {
    line-height: 1.875em;
  }

  a {
    color: var(--color-text-link);
    text-decoration: none;
    transition: all 300ms ease-in-out;
  }

  a:hover {
    color: var(--color-background);
    background-color: var(--color-text-link);
  }

  ul,
  ol {
    margin: 1rem 0 1rem 2rem;
  }

  li {
    margin: 0.25rem 0;
  }

  blockquote p {
    font-style: italic;
    font-size: 1.25rem;
    line-height: 2.125rem;
    text-align: center;
    max-width: 36rem;
    margin: 3rem auto;
  }

  hr {
    border: 0;
    height: 1px;
    background: var(--color-border);
    opacity: 0.1;
    margin-top: 2rem;
  }

  table {
    width: 100%;
    border-spacing: 0.25rem;
    border-collapse: collapse;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
    margin-top: 2rem;
  }

  th {
    font-weight: 700;
  }

  table,
  th,
  td {
    border: 1px solid var(--color-text-body);
  }

  th,
  td {
    text-align: left;
    padding: 0.5rem;
  }
`

export default PostBody
