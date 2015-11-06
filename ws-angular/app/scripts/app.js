(function () {
  'use strict';

angular.module('MyApp', ['ngMaterial','ngMdIcons','ngRoute', 'MyApp.controllers', 'MyApp.services'])

.config(config);

  /* @ngInject */
  function config ( $routeProvider) {


    $routeProvider
      .when('/', {
        templateUrl: 'views/chats.html',
        controller: 'ChatsCtrl',
        controllerAs: 'chats'
      });
  }


})();
