'use strict'

# Declare app level module which depends on filters, and services
App = angular.module('app', [
  'ngCookies'
  'ngResource'
  'ngRoute'
  'app.controllers'
  'app.directives'
  'app.models'
  'googlechart.directives'
  'app.filters'
  'app.services'
  'partials'
  'ui.bootstrap'
])

App.config([
  '$routeProvider'
  '$locationProvider'

($routeProvider, $locationProvider, config) ->

  $routeProvider

    .when('/home', {templateUrl: '/partials/home.html'})

    # Catch all
    .otherwise({redirectTo: '/home'})

  # Without server side support html5 must be disabled.
  $locationProvider.html5Mode(true)
])
