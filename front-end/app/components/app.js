'use strict';

/**
 * @ngdoc overview
 * @name zssnApp
 * @description
 * # zssnApp
 *
 * Main module of the application.
 */
angular
  .module('zssnApp', [
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
    dashboard: '/dashboard',
    survivor: '/survivor',
    exchange: '/exchange',
    quarantine: '/quarantine',
    report: '/report'
  })
  .constant('REQUEST', {
    api: {
      url: 'http://localhost:8007/v1',
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
    }).state('main.survivor', {
      url: PATH.survivor,
      templateUrl: 'views/survivor.html',
      controller: 'SurvivorCtrl as ctrl'
    }).state('main.exchange', {
      url: PATH.exchange,
      templateUrl: 'views/exchange.html',
      controller: 'ExchangeCtrl as ctrl'
    }).state('main.quarantine', {
      url: PATH.quarantine,
      templateUrl: 'views/quarantine.html',
      controller: 'QuarantineCtrl as ctrl'
    }).state('main.report', {
      url: PATH.report,
      templateUrl: 'views/report.html',
      controller: 'ReportCtrl as ctrl'
    });

    $urlRouterProvider.otherwise(function() {
      return '/main/dashboard';
    });

  });
