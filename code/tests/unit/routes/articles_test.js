import ArticlesRoute from 'appkit/routes/articles';
import articles from 'appkit/models/articles';

var route;
module('Articles Route', {
  setup: function () {
    var container = isolatedContainer([
      'route:articles'
    ]);

    route = container.lookup('route:articles');
  }
});

test('it exists', function () {
  ok(route);
});

test('articles', function () {
  expect(1);
  deepEqual(route.model(), articles);
});
