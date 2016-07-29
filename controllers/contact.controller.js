angular.module("qshop").controller("ContactController", function($scope, Contact) {

    $scope.sendMessage = function() {

      var message = {
        email: "",
        subject: "",
        message: ""
      };

      message.email   = $scope.email;
      message.subject = $scope.subject;
      message.message = $scope.message;

      Contact.sendMessage(message);
    }

});
