import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
    this.route('button');
    this.route('datepicker');
    this.route('progressBar');
    this.route('spinner');
    this.route('slider');
});

export default Router;
