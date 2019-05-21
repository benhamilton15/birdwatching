const PubSub = require('../helpers/pub_sub.js')

const SightingFormView = function (form) {
  this.form = form;
};

SightingFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (event) => {
    this.handleSubmit(event);
  });
};

SightingFormView.prototype.handleSubmit = function (event) {
  event.preventDefault();
  const newSighting = this.getDetails(event.target);
  PubSub.publish('SightingFormView:newsighting', newSighting);
  event.target.reset();
}

SightingFormView.prototype.getDetails = function(event){
  const newSighting = {
    species: event.species.value,
    location: event.location.value,
    date: event.date.value
  }
  return newSighting;
}

module.exports = SightingFormView;
