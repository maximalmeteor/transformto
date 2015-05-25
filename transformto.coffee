Mongo.Collection::transformTo = (cls) ->
  @_transform = (doc) -> new cls doc
