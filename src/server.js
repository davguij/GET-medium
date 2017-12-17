const fastify = require('fastify')();
const minimist = require('minimist');

fastify.use(require('cors')());
fastify.register(require('fastify-compress'));
fastify.register(require('fastify-swagger-ui'), {
  swagger: {
    info: {
      title: 'Test swagger',
      description: 'testing the fastify swagger api',
      version: '0.1.0',
    },
    host: 'localhost',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
  },
});

fastify.register(require('./routes/other-routes'));
fastify.register(require('./routes/medium-routes'), { prefix: '/api' });

fastify.ready(err => {
  if (err) throw err;
  fastify.swagger();
});

const start = (opts, callback) => {
  fastify.listen(opts.port, err => {
    callback(err, fastify);
  });
};

// In this way you can run the server both from the CLI and as a required module.
if (require.main === module) {
  // Run the server with:
  // $ node index.js -p 8080
  start(
    minimist(process.argv.slice(2), {
      integer: ['port'],
      alias: {
        port: 'p',
      },
      default: {
        port: 3000,
      },
    }),
    (err, instance) => {
      if (err) throw err;
      console.log(`server listening on ${instance.server.address().port}`);
    }
  );
}

// Here we are exposing the function that starts the server
// in this way inside the test files we can require and run it.
module.exports = { start };
