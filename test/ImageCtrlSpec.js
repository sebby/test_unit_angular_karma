describe.only('Image Controller', function () {
  var scope;

  beforeEach(function () {
    angular.mock.module('App');
    angular.mock.inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      $controller('ImageCtrl',{
        $scope : scope
      })
    });
  });
  it('should have images', function () {
      expect(scope.images).to.be.eql([]);
  });
  it('should delete images', function(){
    var image = {};
    scope.images = [{}, image, {}];
    scope.deleteImage(image);
    expect(scope.images.length).to.be.equal(2);
    expect(scope.images[1]).to.not.be.equal(image);
  });
});