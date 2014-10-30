import Ember from 'ember';

export default Ember.ObjectController.extend({
    num: 50,
    vals: [10, 90],
    num2: 50,
    num3: 50,
    text: "",
    didSlideBasic: function() {
        this.set('num2', this.get('num'));
    }.observes('num'),
    actions: {
        didSlide: function() {
            this.set('text', this.get('text') + "_");
        }
    }
});
