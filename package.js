Package.describe({
  name: 'maximal:transformto',
  version: '0.1.0',
  summary: 'Provides the `transformTo` function on collections, to transform items to a class',
  git: 'https://github.com/maximalmeteor/transformto/',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use([
    'coffeescript',
    'mongo'
  ]);

  api.addFiles('transformto.coffee');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('coffeescript');
  api.use('maximal:transformto');
  api.addFiles('transformto-tests.coffee');
});
