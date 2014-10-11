import Ember from 'ember';

export default Ember.ObjectController.extend({
    count: 0,
    text: function() {
        return "Clicked " + this.get('count') + " times.";
    }.property('count'),
    actions: {
        changeText: function() {
            this.incrementProperty('count');
        }
    }
});
