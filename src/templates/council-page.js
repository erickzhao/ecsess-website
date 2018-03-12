import React from "react"
import Header from "../components/Header"
import Council from "../components/Council"

export default ({ data }) => {
  return (
    <div>
      <Header {...data.markdownRemark.frontmatter}/>
      <Council {...data.markdownRemark.frontmatter}/>
    </div>
  )
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
          description
        }
      }
    }
  }
`
