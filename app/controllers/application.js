import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    authenticate(){
      let username = this.get('identification');
      let password = this.get('password');
      return Ember.$.ajax({
        method:'POST',
        url:'http://localhost:3000/register',
        data: {username:username,password:password}
      }).then(result =>{
        console.log(username + password);
        console.log(result);
      });
    }
  }
});
