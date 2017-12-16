const userSchema = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          userId: { type: 'string' },
          username: { type: 'string' },
          name: { type: 'string' },
          createdAt: { type: 'number' },
          lastPostCreatedAt: { type: 'number' },
          bio: { type: 'string' },
          imageId: { type: 'string' },
          backgroundImageId: { type: 'string' },
        },
      },
    },
  },
};
module.exports = {
  userSchema,
};
