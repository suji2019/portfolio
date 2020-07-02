import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";

class Blog extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMdx.edges;
    const project = data.project;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <Img
          style={{ width: "1000px" }}
          fluid={project.cover.childImageSharp.fluid}
        />

        <div style={{ margin: "20px 0 40px" }}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;
            return (
              <div key={node.fields.slug}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link
                    style={{ boxShadow: `none` }}
                    to={`/blog${node.fields.slug}`}
                  >
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </div>
            );
          })}
        </div>
        <Link to="/">
          <button marginTop="85px">Go Home</button>
        </Link>
      </Layout>
    );
  }
}

export default Blog;

export const pageQuery = graphql`
  query {
    project: projectsYaml {
      title
      cover {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
