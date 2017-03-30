describe('Image Controller', function () {
  var scope;
  describe('toto', function () {
      beforeEach(function () {
        angular.mock.module('App');
        angular.mock.inject(function ($controller, $rootScope) {
          scope = $rootScope.$new();
          $controller('ImageCtrl', {
            $scope: scope
          })
        });
      });
      it('should have images', function () {
        expect(scope.images).to.be.eql([]);
      });
      it('should return toto', function(){
        expect(scope.getHello()).to.be.equal('toto');
      });
      it('should delete image', function () {
        var image = {};
        scope.images = [{}, image, {}];
        scope.deleteImage(image);
        expect(scope.images.length).to.be.equal(2);
        expect(scope.images[1]).to.not.be.equal(image);
        });
    }
  );

});