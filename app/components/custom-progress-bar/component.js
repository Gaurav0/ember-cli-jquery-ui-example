import Ember from 'ember';
import JquiProgressBarComponent from 'ember-cli-jquery-ui/components/jqui-progress-bar/component';

export default JquiProgressBarComponent.extend({
    value: 0,
    max: 100,
    text: "0%",
    animate: function() {
        if (this.get('value') < this.get('max')) {
            this.incrementProperty('value');
            this.set('text', this.get('value') + "%");
        }
        var _this = this;
        Ember.run.later(function() {
            _this.animate();
        }, 30);
    }.on('didInsertElement'),
    uiActions: {
        complete: function () {
            var _this = this;
            Ember.run.next(function () {
                _this.set('text', "Complete!");
            });
        }
    }
});
