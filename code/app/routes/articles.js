import articles from 'appkit/models/articles';

export default Ember.Route.extend({
  model: function () {
    return articles;
  }
});