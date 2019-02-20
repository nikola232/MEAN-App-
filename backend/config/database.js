if (process.env.NODE_ENV === 'production') {
  module.exports = { mongoURL: 'mongodb://nikola:nikola111@ds121652.mlab.com:21652/post-angular-app' }
} else {
  module.exports = { mongoURL: 'mongodb://localhost/postApp-dev' }
}
