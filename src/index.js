const fastify = require('fastify')();

fastify.use(require('cors')());
fastify.register(require('fastify-compress'));
fastify.register(require('./routes'));

fastify.listen(3000, err => {
  if (err) throw err;
  console.log(`server listening on ${fastify.server.address().port}`);
});
