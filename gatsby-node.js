const path = require(`path`);

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const {
    data: { allDatoCmsPost },
  } = await graphql(`
    query {
      allDatoCmsPost {
        nodes {
          id
          slug
        }
      }
    }
  `);

  allDatoCmsPost.nodes.forEach((post) => {
    createPage({
      path: `/posts/${post.slug}`,
      component: path.resolve("./src/templates/post.js"),
      context: {
        id: post.id,
      },
    });
  });
};
