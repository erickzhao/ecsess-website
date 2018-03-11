import React from "react"
import Council from "../components/Council"

export default ({ data }) => {
  return <Council {...data.markdownRemark.frontmatter}/>
}

export const councilPageQuery = graphql`
  query CouncilPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heading
        members {
          name
          position
          photo
        }
      }
    }
  }
`
