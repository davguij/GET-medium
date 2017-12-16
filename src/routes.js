const { mediumFetcher } = require('./helpers');
const { userSchema } = require('./schemas');

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
    return allMediumInfo.references.Post;
  });
}

module.exports = routes;
