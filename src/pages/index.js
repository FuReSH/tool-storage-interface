import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import { BsTools, BsFillPencilFill, BsFillInfoCircleFill, BsSearch } from "react-icons/bs";

const IndexPage = () => (
  <Layout>
    <section className="py-4">
      <div className="container">
        <div className="p-5 mb-4 start-page-container">
          <div className="row g-0 p-5">
              <div className="col-sm-3">
              <StaticImage
                    src="../../static/images/KDH - Logo Symbol - HU Digital Blau.svg"
                    quality={100}
                    formats={["AUTO", "WEBP"]}
                    alt="Logo of the Kompetenzwerkstatt Digital Humanities"
                  /> 
              </div>
              <div className="col-sm-8">
                <h1 className="display-4 fw-light mb-5">Kompetenzwerkstatt Digital Humanities</h1>
                <h2 id="subtitle" className="display-6 fw-light">Tool Registry</h2>
            </div> 
            
                  </div> 
                </div>
      </div>
      <div className="container">
      <div className="row g-2 align-items-sm-stretch">
        <div className="col-md-4">
          <div className="h-100 p-5 bg-light border rounded-3">
            <h2>About</h2>
            <p>Here you can find more information about the Tool Registry of the KDH</p>
            <Link to="/about/" className="btn btn-outline-primary"><BsFillInfoCircleFill /> About</Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="h-100 p-5 bg-light border rounded-3">
            <h2>Search Tools</h2>
            <p>Here you can search for DH tools classified with the TaDiRAH taxonomy and find more information about a specific tool.</p>
            <Link to="/list/" className="btn btn-outline-primary"><BsSearch /> Search</Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="h-100 p-5 bg-light border rounded-3">
            <h2>Edit Tool</h2>
            <p>Here you add new or edit existing DH tools to Wikidata.</p>
            <Link to="/edit/" className="btn btn-outline-primary"><BsFillPencilFill /> Edit</Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="h-100 p-5 bg-light border rounded-3">
            <h2>Explore Wikidata</h2>
            <p>Here you can explore various result sets from Wikidata.</p>
            <Link to="/explore/" className="btn btn-outline-primary"><BsTools /> Explore</Link>
          </div>
        </div>
      </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage

export const Head = () => (
    <Seo />
)
