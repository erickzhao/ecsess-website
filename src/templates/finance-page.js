import React from "react"
import Header from "../components/Header"
import FinanceChart from "../components/FinanceChart"

export default ({ data }) => {
  return (
    <div>
      <Header {...data.markdownRemark.frontmatter}/>
      <FinanceChart {...data.markdownRemark.frontmatter}/>
    </div>
  )
}

export const financePageQuery = graphql`
  query FinancePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heading
      }
    }
  }
`