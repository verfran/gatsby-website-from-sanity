import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

export default function IndexPage({ data }) {

  return (
    <Layout>
      <Seo title="Home" />
      <div>Index page</div>
    </Layout>
  )
}

