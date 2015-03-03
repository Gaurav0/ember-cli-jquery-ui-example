import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
    this.route('accordion');
    this.route('autocomplete');
    this.route('button');
    this.route('datepicker');
    this.route('menu');
    this.route('progressBar');
    this.route('slider');
    this.route('spinner');
    this.route('tabs');
});

export default Router;
