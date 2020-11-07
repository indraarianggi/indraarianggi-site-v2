import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Pagination = ({ currentPage, numPages, context }) => {
  if (numPages <= 1) return null

  const paginationItems = Array.from({ length: numPages }).map((_, i) => {
    const index = i + 1

    const baseLink = `/${context}`
    const link = index === 1 ? baseLink : `${baseLink}/page/${index}`

    return (
      <PaginationItem
        key={index}
        to={link}
        className={currentPage === index ? "active" : ""}
      >
        {index}
      </PaginationItem>
    )
  })

  return <PaginationWrapper>{paginationItems}</PaginationWrapper>
}

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`

const PaginationItem = styled(props => <Link {...props} />)`
  color: ${props => props.theme.colors.secondary};
  background-color: transparent;
  padding: 0.5rem 1rem;
  text-decoration: none;

  &.active {
    color: ${props => props.theme.colors.button};
    font-weight: 600;
    pointer-events: none;
  }

  &:hover {
    color: ${props => props.theme.colors.background};
    background-color: ${props => props.theme.colors.button};
  }
`

export default Pagination
