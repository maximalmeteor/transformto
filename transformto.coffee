Mongo.Collection::transformTo = (cls) ->
  @transform (doc) -> new cls doc
