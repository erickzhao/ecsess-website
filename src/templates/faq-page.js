import React from "react"
import Header from "../components/Header"
import FAQ from "../components/FAQ"

export default ({ data }) => {
  return (
    <div>
      <Header {...data.markdownRemark.frontmatter}/>
      <FAQ {...data.markdownRemark.frontmatter}/>
    </div>
  )
}

export const faqPageQuery = graphql`
  query FAQPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heading
      }
    }
  }
`
