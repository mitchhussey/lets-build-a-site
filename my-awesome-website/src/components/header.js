import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rgb(15,0,55)`,
      background: `linear-gradient(90deg, rgba(14,0,51,1) 0%, rgba(69,252,172,1) 100%)`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0`,
        maxWidth: 960,
        padding: `.5rem 1.0875rem`,
      }}
    >
      <h2 style={{
        margin: 0,
      }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
            display: 'inline-flex',
            alignItems: 'center',
          }}>
          <span id="logo"
            style={{
            backgroundColor: "white",
            color: `rgba(15,0,55,1)`,
            display: 'inline-block',
            padding: '7px',
            textDecoration: `none`,
            fontSize: "14pt",
            width: '55px',
          }}>
            <span style={{
                display: `inline-grid`,
              }}>
              <span style={{
                textDecoration: `none`,
              }}>
                LB
              </span>
              <span style={{
                paddingLeft: `11px`,
              }}>
                AW
              </span>
            </span>
          </span>
          <span style={{
            color: `white`,
            paddingLeft: '15px',
            textDecoration: `none`,
          }}>
            {siteTitle}
          </span>
        </Link>
      </h2>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
