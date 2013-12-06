import articles from 'appkit/models/articles';

export default Ember.Route.extend({
  model: function (params) {
    return articles.findBy('id', params.article_id);
  }
});