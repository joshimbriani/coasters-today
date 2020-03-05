import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

import styles from "../styles/nav.module.css"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    
    return (
      <div>
        <header>
          <h1
            style={{
              ...scale(1.5),
              marginTop: 0,
              marginBottom: 0,
              padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
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
            <ul className={styles.main}>
              <li className={styles.navitem}>
                <Link className={styles.navlink} to="/posts">Posts</Link>
              </li>
              <li className={styles.navitem}>
                <Link className={styles.navlink} to="/tags">Tags</Link>
              </li>
              <li className={styles.navitem}>
                <Link className={styles.navlink} to="/forum">Forum</Link>
              </li>
              <li className={styles.navitem}>
                <Link className={styles.navlink} to="/about">About</Link>
              </li>
            </ul>
            <ul id="tag-nav" className={styles.secondary}>
              <li className={styles.tags} style={{
                justifyContent: 'center'
              }}>
                Top Tags
              </li>
              <li className={styles.tags}>
                <Link to="/tags/details-in-the-park">Details In The Parks</Link>
              </li>
              <li className={styles.tags}>
                <Link to="/tags/ride-reviews">Ride Reviews</Link>
              </li>
              <li className={styles.tags}>
                <Link to="/tags/trip-planning">Trip Planning</Link>
              </li>
              <li className={styles.tags}>
                <Link to="/tags/uae">UAE</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main
          style={{
            maxWidth: rhythm(40),
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
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
