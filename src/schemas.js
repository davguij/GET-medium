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

const postsSchema = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            postId: { type: 'string' },
            authorId: { type: 'string' },
            title: { type: 'string' },
            subtitle: { type: 'string' },
            detectedLanguage: { type: 'string' },
            latestPublishedAt: { type: 'number' },
            href: { type: 'string', format: 'url' },
            image: { type: 'string', format: 'url' },
            readingTime: { type: 'number' },
            claps: { type: 'number' },
          },
        },
      },
    },
  },
};
module.exports = {
  userSchema,
  postsSchema,
};
