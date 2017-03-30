var app = angular.module('App', []);

app.factory('Social', function ($http, $q) {
  return {
    twitterAPI: 'http://urls.api.twitter.com/1/urls/count.json?callback=angular.callbacks._0&url',
    getTwitterCount: function (url) {

      var deferred = $q.defer();
      var promise = deferred.promise;
      var resolvedValue;
      setTimeout(function () {
        deferred.resolve(1);
      }, 1000);
      return promise;
    }
  }
});
app.controller('ImageCtrl', function ($scope) {
  $scope.images = [];
  $scope.deleteImage = function (image) {
    $scope.images.splice($scope.images.indexOf(image), 1);
  };
  $scope.getHello =  function(){
      return $scope.getWorld() + $scope.getWorld2();
  };
  $scope.getWorld  = function(){
    return 'to';
  }

  $scope.getWorld2  = function(){
    return 'to';
  }});

app.directive('alerts', function () {
  return{
    restrict : 'E',
    template:'<div><div class="alert" ng-repeat="message in messages">{{ message.msg }}</div></div>',
    scope : {
      messages: '=msgs'
    },
    link:function(scope,element,attrs){
      scope.demo = 1;
    }
  }
});