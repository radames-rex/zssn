'use strict';

/**
 * @ngdoc overview
 * @name challengeApp
 * @description
 * # challengeApp
 *
 * Main module of the application.
 */
angular
  .module('challengeApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'pascalprecht.translate',
    'ngMaterial'
  ])
  .constant('PATH', {
    main: '/main',
    dashboard: '/dashboard'
  })
  .constant('REQUEST', {
    github: {
      url: 'https://api.github.com',
      users: '/users/',
      repos: '/repos'
    }
  })
  .config(function($stateProvider, $urlRouterProvider, $translateProvider, PATH) {

    /* Configuração do provider de universalização e da linguagem padrão. */
    $translateProvider.useStaticFilesLoader({
      prefix: 'translate/messages-',
      suffix: '.json'
    });
    $translateProvider.preferredLanguage('en');

    /* Configuração dos estados e rotas da aplicação */
    $stateProvider.state('main', {
      abstract: true,
      url: PATH.main,
      templateUrl: 'views/main.html'
    }).state('main.dashboard', {
      url: PATH.dashboard,
      templateUrl: 'views/dashboard.html',
      controller: 'DashboardCtrl as ctrl'
    });

    $urlRouterProvider.otherwise(function() {
      return '/main/dashboard';
    });

  });
