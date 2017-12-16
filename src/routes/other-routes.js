module.exports = async (fastify, options) => {
  fastify.get('/status', (req, reply) => {
    reply.send({ status: 'up and running!' });
  });
};
