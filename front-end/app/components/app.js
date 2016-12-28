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
    'ngMaterial',
    'ngMap'
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
      url: 'http://zssn-backend-example.herokuapp.com/api',
      reports: '/report.json',
      survivor: {
        fetch: '/people/{id}.json',
        new: '/people.json',
        update: '/people/{id}.json',
        items: '/people/{person_id}/properties.json',
      },
      survivors: '/people.json',
      quarantine: '/people/{id}/report_infection.json',
      exchange: '/people/{person_id}/properties/trade_item.json'
    }
  })
  .config(function($stateProvider, $urlRouterProvider, $translateProvider, PATH, $mdThemingProvider) {

    /* Configuração do provider de universalização e da linguagem padrão. */
    $translateProvider.useStaticFilesLoader({
      prefix: 'translate/messages-',
      suffix: '.json'
    });
    $translateProvider.preferredLanguage('en');

    /*Configuração do Tema. */
    $mdThemingProvider.theme('default')
      .primaryPalette('blue-grey')
      .accentPalette('purple');

    /* Configuração dos estados e rotas da aplicação */
    $stateProvider.state('main', {
      abstract: true,
      url: PATH.main,
      templateUrl: 'views/main.html'
    }).state('main.dashboard', {
      url: PATH.dashboard,
      templateUrl: 'views/dashboard.html',
      controller: 'DashboardCtrl as ctrl'
    }).state('main.dashboard.survivor', {
      url: PATH.survivor,
      templateUrl: 'views/survivor.html',
      controller: 'SurvivorCtrl as ctrl'
    }).state('main.dashboard.exchange', {
      url: PATH.exchange,
      templateUrl: 'views/exchange.html',
      controller: 'ExchangeCtrl as ctrl'
    }).state('main.dashboard.quarantine', {
      url: PATH.quarantine,
      templateUrl: 'views/quarantine.html',
      controller: 'QuarantineCtrl as ctrl'
    }).state('main.dashboard.report', {
      url: PATH.report,
      templateUrl: 'views/report.html',
      controller: 'ReportCtrl as ctrl'
    });

    $urlRouterProvider.otherwise(function() {
      return '/main/dashboard';
    });

  });
