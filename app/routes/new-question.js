import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },

  actions: {
    savePost() {
      var params = {
        author: this.controller.get('author'),
        inquiry: this.controller.get('inquiry'),
        notes: this.controller.get('notes')
      };

      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    }
  }
});
