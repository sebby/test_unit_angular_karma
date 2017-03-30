describe.only('Alert directive', function(){
  var scope;
  beforeEach(function(){
    angular.mock.module('App');
    angular.mock.inject(function($compile, $rootScope){
    scope = $rootScope.$new();
    element = $compile('<alerts msgs="messages"></alerts>')(scope);

    });
  })
  it('should show an alert', function(){
    scope.messages = [{type:'success', msg:'bravo'},{type:'success', msg:'Bravo'}];
    scope.$digest();
    expect($('.alert', element).length).to.be.equal(2);
  });
});