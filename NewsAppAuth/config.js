module.exports = {

  users: {
    admin: {password: 'password', scopes: 'news:all news:read news:edit'.split(' ')},
    stranger: {password: 'password', scopes: 'news:all news:read'.split(' ')}
  },
  jwtSecret: 'check',
  port: process.env.PORT || 8010,
  enableAuth: true
}
