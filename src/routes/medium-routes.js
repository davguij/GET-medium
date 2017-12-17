const { mediumFetcher } = require('../helpers');
const { userSchema } = require('../schemas');

async function routes(fastify, options) {
  fastify.get('/:username/all', async (request, reply) => {
    return mediumFetcher(request.params.username);
  });
  fastify.get('/:username', userSchema, async (request, reply) => {
    const allMediumInfo = await mediumFetcher(request.params.username);
    return allMediumInfo.user;
  });
  fastify.get('/:username/posts', async (request, reply) => {
    const allMediumInfo = await mediumFetcher(request.params.username);
    const posts = Object.values(allMediumInfo.references.Post);
    return posts.map(post => {
      return {
        postId: post.id,
        title: post.title,
        subtitle: post.content.subtitle,
        detectedLanguage: post.detectedLanguage,
        latestPublishedAt: post.latestPublishedAt,
        href: `https://medium.com/@${request.params.username}/${
          post.uniqueSlug
        }`,
        authorId: post.creatorId,
        image: `https://cdn-images-1.medium.com/max/1600/${
          post.virtuals.previewImage.imageId
        }`,
        readingTime: post.virtuals.readingTime,
        claps: post.virtuals.totalClapCount,
      };
    });
  });
}

module.exports = routes;
