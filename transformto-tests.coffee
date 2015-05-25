class Post
  constructor: (doc) ->
    _.extend this, doc

Tinytest.add 'transformTo', (test) ->
  posts = new Mongo.Collection null
  posts.transformTo Post

  posts.insert name: 'test'
  post = posts.findOne()

  test.isTrue post instanceof Post
