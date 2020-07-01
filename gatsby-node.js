const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
exports.onCreateNode = ({ node, getNode, actions }) => {
  console.log(node.internal.type);

  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    console.log("here, go create");
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    console.log("slug is", slug);
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

const wrapper = (promise) =>
  promise.then((result) => {
    if (result.errors) {
      throw result.errors;
    }
    return result;
  });

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  console.log("create page");
  const projectTemplate = require.resolve("./src/templates/project.tsx");

  const result2 = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  console.log(JSON.stringify(result2, null, 4));
  console.log("result2.data", JSON.stringify(result2.data));
  result2.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.tsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    });
  });

  const result = await wrapper(
    graphql(`
      {
        projects: allProjectsYaml {
          nodes {
            slug
            images
          }
        }
      }
    `)
  );

  result.data.projects.nodes.forEach((node) => {
    createPage({
      path: node.slug,
      component: projectTemplate,
      context: {
        slug: node.slug,
        images: `/${node.images}/`,
      },
    });
  });
};
