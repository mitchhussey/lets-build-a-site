import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About Me" />
    <h1>About Me</h1>
    <p>This page is under construction- Please come back later!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
