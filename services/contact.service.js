angular.module("qshop").factory("Contact", function($http) {

  var contact = {};

  contact.sendMessage = function(message) {
    $http.post('http://10.59.0.30:3000/posts', message).then(function(result){
      console.log(result.data);
    }, function(err){
      console.log(err);
    });
    console.log("Message", message);
    // alert('message sent');
  };

  return contact;

});
