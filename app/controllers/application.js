import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    signInAction: function(){

    },
    registerAction: function(){
        this.send('showModal','loading-modal');
    },
  },
  showModal: function(name, model) { this.render(name, { into: 'application', outlet: 'modal', model: model }); },

});
