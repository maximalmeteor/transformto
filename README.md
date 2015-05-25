# maximal:transformto [![Build Status](https://travis-ci.org/maximalmeteor/transformto.svg)](https://travis-ci.org/maximalmeteor/transformto)
Meteor package that provides a `transformTo` function on collections, to transform items to a class

## Installation

```
    meteor add maximal:transformto
```

## Usage
````js
var Posts = new Mongo.Collection('posts');

var Post = function Post(doc) {
  _.extend(this, doc);
  this.author = function() {
    Authors.findOne(this.authorId);
  }
}

Posts.transformTo(Post);
````
