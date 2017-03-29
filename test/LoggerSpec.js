describe('Logger', function(){

  var Test;

  beforeEach (function(){
    angular.mock.module('services');

    angular.mock.inject(function(_Logger_){
      Logger= _Logger_;
    });
  });


  describe('#getTwitterCount', function(){
    it('should have a say method', function(){
      expect(Logger.say).to.be.a('function');
    });


  });


});