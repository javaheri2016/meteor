import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

var img_data = [
    {
    img_src:"1.jpg",
    img_alt:"ostrava"
},
      {
    img_src:"2.jpg",
    img_alt:"ostrava"
},
      {
    img_src:"3.jpg",
    img_alt:"ostrava"
},
    ];

Template.images.helpers({images:img_data});

/* Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
*/