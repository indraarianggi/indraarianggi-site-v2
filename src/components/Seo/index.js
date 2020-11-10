/**
 *
 * https://www.gatsbyjs.org/docs/add-seo-component/
 * https://medium.com/yellowcode/how-to-do-meta-tags-in-gatsbyjs-45245dc68ab9
 *
 */

import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({
  title,
  description,
  pathname,
  image,
  themeColor,
  isArticle,
}) => {
  // Querying data from siteMetadata
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          defaultTitle: title
          defaultDescription: description
          siteUrl: url
          defaultImage: image
          defaultThemeColor: themeColor
        }
      }
    }
  `)

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
    defaultThemeColor,
  } = data.site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || "/"}`,
    image: `${siteUrl}${image || defaultImage}`,
    themeColor: themeColor || defaultThemeColor,
  }

  return (
    <Helmet htmlAttributes={{ lang: "en" }}>
      {/* Primary Meta Tags */}
      <title>{seo.title}</title>
      <meta name="title" content={seo.title} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <link rel="icon" type="image/png" href={seo.image} />
      <meta name="theme-color" content={seo.themeColor} />

      {/* Open Graph / Facebook */}
      {isArticle ? (
        <meta property="og:type" content="article" />
      ) : (
        <meta property="og:type" content="website" />
      )}
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seo.url} />
      <meta property="twitter:title" content={seo.title} />
      <meta property="twitter:description" content={seo.description} />
      <meta property="twitter:image" content={seo.image} />

      {/* Icons */}
      <link
        rel="apple-touch-icon-precomposed"
        sizes="57x57"
        href="/apple-touch-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="114x114"
        href="/apple-touch-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="72x72"
        href="/apple-touch-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="144x144"
        href="/apple-touch-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="60x60"
        href="/apple-touch-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="120x120"
        href="/apple-touch-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="76x76"
        href="/apple-touch-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="152x152"
        href="/apple-touch-icon-152x152.png"
      />
      <link
        rel="icon"
        type="image/png"
        href="/favicon-196x196.png"
        sizes="196x196"
      />
      <link
        rel="icon"
        type="image/png"
        href="/favicon-96x96.png"
        sizes="96x96"
      />
      <link
        rel="icon"
        type="image/png"
        href="/favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="/favicon-16x16.png"
        sizes="16x16"
      />
      <link
        rel="icon"
        type="image/png"
        href="/favicon-128.png"
        sizes="128x128"
      />
      <meta name="application-name" content={defaultTitle} />
      <meta name="msapplication-TileColor" content={seo.themeColor} />
      <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
      <meta name="msapplication-square70x70logo" content="/mstile-70x70.png" />
      <meta
        name="msapplication-square150x150logo"
        content="/mstile-150x150.png"
      />
      <meta
        name="msapplication-wide310x150logo"
        content="/mstile-310x150.png"
      />
      <meta
        name="msapplication-square310x310logo"
        content="/mstile-310x310.png"
      />
    </Helmet>
  )
}

export default Seo

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  pathname: PropTypes.string,
  image: PropTypes.string,
  themeColor: PropTypes.string,
  isArticle: PropTypes.bool,
}

Seo.defaultProps = {
  title: null,
  description: null,
  pathname: null,
  image: null,
  themeColor: null,
  isArticle: false,
}
