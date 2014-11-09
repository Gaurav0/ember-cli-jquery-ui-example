import Ember from 'ember';

export default Ember.View.extend({
    didInsertElement: function() {
        Ember.run.schedule('afterRender', function() {
            this.$().find('.ui-tabs-nav .ui-state-default').mouseover(function() {
                $(this).removeClass("ui-state-default").addClass("ui-state-hover");
            });
            this.$().find('.ui-tabs-nav .ui-state-default').mouseout(function() {
                $(this).removeClass("ui-state-hover").addClass("ui-state-default");
            });
        }.bind(this));
    }
});