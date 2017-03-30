describe('Alert directive', function () {
  var scope;
  beforeEach(function () {
    angular.mock.module('App');
    angular.mock.inject(function ($compile, $rootScope) {
      scope = $rootScope.$new();
      element = $compile('<alerts msgs="messages"></alerts>')(scope);
      $('body').append(element);
      scope.$digest();
    });
  });
  afterEach(function(){
    element.remove();
  });
  it('should show an alert', function () {
    scope.messages = [{type: 'success', msg: 'Bravo'}, {type: 'success', msg: 'Bravo2'}];
    scope.$digest();
    expect($('.alert', element).length).to.be.equal(2);
    expect($('.alert:last', element).text()).to.be.equal('Bravo2');
  });
  it('should have demo in the scope', function () {
    expect(element.isolateScope().demo).to.be.equal(1);
  });
});