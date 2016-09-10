import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    authenticate(){
      let username = this.get('identification');
      let password = this.get('password');
      var user = this.store.createRecord('user', {
  username: username,
  password: password
});
console.log(username);
user.save();
    }
  }
});
