// Here we get the module we created in file one
angular.module('myApp.controllers')
.controller('HelloController', function($scope, $rootScope){
  $scope.toto =  function(message){
    var message = message || 'World';
    return 'Hello ' + message;
  };
});
