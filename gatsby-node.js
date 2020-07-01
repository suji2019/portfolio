const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
exports.onCreateNode = ({ node, getNode, actions }) => {
  console.log(node.internal.type);

  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
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

  console.log("here all good");
  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  console.log("blog post");
  return graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then((result) => {
    console.log("res", result);
    if (result.errors) {
      throw result.errors;
    }

    // Create blog posts pages.
    const posts = result.data.allMdx.edges;

    posts.forEach((post, index) => {
      console.log("post", post);
      const previous =
        index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      createPage({
        path: `blog${post.node.fields.slug}`,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      });
    });

    return null;
  });
};
