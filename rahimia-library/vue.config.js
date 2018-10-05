module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/rl-preview/'
    : '/'
}
