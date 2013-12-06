var App;

module('Blog Acceptance Test', {
  setup: function () {
    App = startApp();
  },
  teardown: function () {
    Ember.run(App, 'destroy');
  }
});

test('Navigation', function () {
  expect(1);
  visit('/').then(function () {
    var nav = find('.nav li');
    equal(nav.length, 2);
  });
});

test('Index goes to about', function () {
  expect(1);
  visit('/').then(function () {
    equal(App.__container__.lookup('controller:application').get('currentPath'), 'about');
  });
});
