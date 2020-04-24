import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi 👋 </h1>
    <p>Welcome to my new site!</p>
    <p>It's a work in progress, but I'm glad you stopped by!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">About Me</Link>
  </Layout>
)

export default IndexPage
