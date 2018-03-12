import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/Header'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div>
        <Header title={ 'ECSESS' } heading={ 'McGill Electrical, Computer, Software Engineering Student Society' }/>
      <section className="section">
        <div className="container">
          <h2 className="title">What's new?</h2>
          {posts
            .filter(post => post.node.frontmatter.templateKey === 'blog-post')
            .map(({ node: post }) => (
              <div
                className="content box"
                key={post.id}
              >
                <p>
                  <Link className="has-text-primary subtitle" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <small>{post.frontmatter.date}</small>
                </p>
                <p>{post.excerpt}</p>
                <Link className="button is-primary" to={post.fields.slug}>
                  Keep Reading →
                </Link>
              </div>
            ))}
        </div>
      </section>
      </div>
      
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
