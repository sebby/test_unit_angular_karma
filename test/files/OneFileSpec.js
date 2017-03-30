describe('One file for application app', function(){

  var scope;

  beforeEach(function () {
    angular.mock.module('myApp.controllers');
    angular.mock.inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      $controller('HelloController', {
        $scope: scope
      })
    });
  });
  it('should one file', function(){
    expect('1').to.be.equal('1');
    expect(scope.toto()).to.be.equal('Hello World');
  })
});