import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    saveAnswer() {
      var params = {
        author: this.get('author'),
        response: this.get('response'),
        question: this.get('question'),
        upVotes: 0,
        downVotes: 0
      }
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
