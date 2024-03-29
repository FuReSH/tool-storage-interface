import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "nav-link active" } : {className: "nav-link"}
}

const ExactNavLink = props => (
  <Link getProps={isActive} {...props} />
)

const Navbar = ({ siteTitle }) => {
  return (
    <nav id="nav-top" className="navbar navbar-expand-md navbar-dark bg-primary fixed-top">
      <div className="container">
        <Link to="/" className="navbar-brand" href="#">
        <StaticImage
                    src="../../static/images/point.png"
                    width={20}
                    quality={20}
                    formats={["AUTO", "WEBP"]}
                    alt="Just a white filled circle"
                    className="mt-1"
                  />   
          
          <span className="ps-2">{siteTitle}</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-navbar"
                aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <ExactNavLink
                to="/"
              >
                Home
              </ExactNavLink>
            </li>
            <li className="nav-item">
              <ExactNavLink
                to="/about"
              >
                About
              </ExactNavLink>
            </li>
            <li className="nav-item">
              <ExactNavLink
                to="/list"
              >
                Search
              </ExactNavLink>
            </li>
            <li className="nav-item">
              <ExactNavLink
                to="/edit"
              >
                Edit
              </ExactNavLink>
            </li>
            <li className="nav-item">
              <ExactNavLink
                to="/explore"
              >
                Explore
              </ExactNavLink>
            </li>
          </ul>
          <ul className="navbar-nav flex-row flex-wrap ms-md-auto">
          <li className="nav-item">
         <a className="nav-link" href="#">EN</a>
        </li>
        <li className="nav-item"><span className="nav-link">|</span></li>
        <li className="nav-item"><a className="nav-link" href="#">DE</a></li>
        <li className="nav-item">
          <a className="ps-4 nav-link" href="https://github.com/FuReSH" target="_blank" rel="noopener">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" className="navbar-nav-svg d-inline-block align-text-top" viewBox="0 0 512 499.36" role="img"><title>GitHub</title><path fill="currentColor" fillR  ule="evenodd" d="M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z"></path></svg>
            <small className="d-md-none ms-2">GitHub</small>
          </a>
        </li>
      </ul>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
