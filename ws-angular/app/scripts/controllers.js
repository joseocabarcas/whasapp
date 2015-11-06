
(function () {
  'use strict';

  /* @ngInject */
  angular
    .module('MyApp.controllers', ['MyApp.services'])
    .controller('ChatsCtrl', ChatsCtrl)

  /* @ngInject */
  function ChatsCtrl ($scope, $mdDialog,$http) {
     $http.get("http://localhost:1337/chat/")
		 .success(function(data){
		 	$scope.people=data;
		 });
  }

 

})();
