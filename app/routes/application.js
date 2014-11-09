import Ember from 'ember';

export default Ember.Route.extend({
    afterModel: function(user, transition) {
        if(transition.targetName === 'index') {
            this.transitionTo('accordion');
        }
    }
});