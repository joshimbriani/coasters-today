import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    
    return (
      <div
        style={{
          padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>
          <h1
            style={{
              ...scale(1.5),
              marginBottom: rhythm(1.5),
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h1>
          <nav>
            <ul id="top-nav">
              <li>
                <Link to="/posts">Posts</Link>
              </li>
              <li>
                <Link to="/tags">Tags</Link>
              </li>
              <li>
                <Link to="/forum">Forum</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
            <ul id="tag-nav">
              <li>
                Top Tags
              </li>
              <li>
                <Link to="/tags/details-in-the-park">Details In The Parks</Link>
              </li>
              <li>
                <Link to="/tags/ride-reviews">Ride Reviews</Link>
              </li>
              <li>
                <Link to="/tags/trip-planning">Trip Planning</Link>
              </li>
              <li>
                <Link to="/tags/uae">UAE</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main
          style={{
            maxWidth: rhythm(40),
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
          {children}
        </main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
