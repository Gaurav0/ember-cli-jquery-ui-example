import Ember from 'ember';

export default Ember.View.extend({
    didInsertElement: function() {
        var _this = this;
        Ember.run.schedule('afterRender', function() {
            _this.$().find('.ui-tabs-nav .ui-state-default').mouseover(function() {
                Ember.$(this).removeClass("ui-state-default").addClass("ui-state-hover");
            });
            _this.$().find('.ui-tabs-nav .ui-state-default').mouseout(function() {
                Ember.$(this).removeClass("ui-state-hover").addClass("ui-state-default");
            });
        });
    }
});