describe('Social', function(){
  var Social ;
  var $http;
  var url = 'http://grafikart.fr';

  var Test;

  beforeEach (function(){
    angular.mock.module('App');
    angular.mock.inject(function(_Social_, $httpBackend){
      Social = _Social_;
      $http = $httpBackend;
    });
  });

  afterEach(function(){

   // $http.verifyNoOutstandingExpectation();
   // $http.verifyNoOutstandingRequest();
  });
/*
  describe('#getTwitterCount', function(){
    it('should have a getTwitterCount method', function(){
      expect(Social.getTwitterCount).to.be.a('function');
    });
    it('should call JSONP', function(){
        $http.expectJSONP(Social.twitterAPI + url).respond(false);
        Social.getTwitterCount(url);
    });
    it.skip('should test promise angular', function(done){
      //$http.expectJSONP(Social.twitterAPi + url).respond({count:2});
        Social.getTwitterCount().then(function(count){
          expect(count).to.be.equal(2);
          done();
        })
    });

  });
*/

});