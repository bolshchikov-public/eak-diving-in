var Router = Ember.Router.extend({
  location: 'history'
}); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.resource('about', {path: '/'});
  this.resource('articles', function () {
    this.resource('article', {path: ':article_id'});
  });
});

export default Router;
