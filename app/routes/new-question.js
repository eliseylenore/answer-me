import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },

  actions: {
    saveQuestion() {
      var params = {
        author: this.controller.get('author'),
        inquiry: this.controller.get('inquiry'),
        notes: this.controller.get('notes')
      };

      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    }
  }
});
