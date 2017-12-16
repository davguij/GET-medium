const { test } = require('ava');
const http = require('axios');
const server = require('./server');

// Run the server
server.start({ port: 0 }, (err, fastify) => {
  test('The app should start up without issues', async t => {
    if (err) t.fail();
    const response = await http.get(
      `http://localhost:${fastify.server.address().port}/status`
    );
    t.is(response.status, 200);
    t.deepEqual(response.data, { status: 'up and running!' });
  });
});
