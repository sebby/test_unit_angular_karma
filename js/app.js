var app =  angular.module('App', []);

app.factory('Social', function($http, $q){
  return {
    twitterAPI:'http://urls.api.twitter.com/1/urls/count.json?callback=angular.callbacks._0&url',
    getTwitterCount: function(url){

      var deferred = $q.defer();
      var promise = deferred.promise;
      var resolvedValue;
        setTimeout(function(){
          deferred.resolve(1);
        },1000);
        return promise;
    }
  }
});
app.controller('ImageCtrl', function($scope){
  $scope.images = [];
  $scope.deleteImage =  function(image){
    $scope.images.splice($scope.images.indexOf(image),1);
  };
});
