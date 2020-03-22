import React from "react"
import { Link } from "gatsby"

//Components
import Layout from "../components/layout"
import SEO from "../components/seo"

class AboutPage extends React.Component {
  render() {
    return (
      <Layout title="Starter ..." subtitle="Built by Henrik">
        <SEO title="About Page" />
        <div>
          <p>About Page</p>
          <p>
            Go To <Link to="/">Main</Link>
          </p>
        </div>
      </Layout>
    )
  }
}

export default AboutPage
