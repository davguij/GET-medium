const { test } = require('ava');
const http = require('axios');

const server = require('../server');

// Run the server
server.start({ port: 0 }, (err, fastify) => {
  test('The user endpoint should return details from the specified user', async t => {
    if (err) t.fail();
    const response = await http.get(
      `http://localhost:${fastify.server.address().port}/api/davguij`
    );
    t.is(response.status, 200);
    t.is(response.data.username, 'davguij');
    t.is(response.data.name, 'David Guijarro');
    t.is(response.data.createdAt, 1433325749520);
  });

  test('The posts endpoint should return an array of posts from the user', async t => {
    if (err) t.fail();
    const response = await http.get(
      `http://localhost:${fastify.server.address().port}/api/davguij/posts`
    );
    t.is(response.status, 200);
    t.true(Array.isArray(response.data));
    t.true(response.data.length > 0);
    t.truthy(response.data[0].postId);
  });
});
