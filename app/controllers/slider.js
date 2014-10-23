import Ember from 'ember';

export default Ember.ObjectController.extend({
    num: 50,
    vals: [10, 90],
    text: "50%",
    num2: 50,
    didSlideBasic: function() {
        this.set('num2', this.get('num'));
    }.observes('num'),
    actions: {
        didSlide: function(event, ui) {
            this.set('text', ui.value + "%");
        }
    }
});
