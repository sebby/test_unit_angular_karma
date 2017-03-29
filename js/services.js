var services = angular.module('services', []);

services.factory('Logger', function() {
  var logger = {};
  logger.say =  function(){
    return 'Hello world';
  };
  return logger;
});