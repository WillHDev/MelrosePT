import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './templates/app/layout.html';
import './templates/_partials/nav.html';
import './templates/home/index.html';
import './templates/home/about.html';
// Router.route('/', function () {
//   this.render('layout');
// });


Router.route('/',  {
  name: "homeIndex",
  data: function() {
    return {
      message : "Welcome to MelrosePT"
    }
  }
  
});

Router.route('/about', function () {
  this.render('homeAbout');
});

Router.route('/contact', function () {
  this.render('homeAbout');
});
//import './templates/main.html' 
//import './server/routes.js';

// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });

// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });
