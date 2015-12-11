'use strict'

### Directives ###

# register the module with Angular
angular.module('app.directives', [
  # require the 'app.service' module
  'app.services'
])

.directive('appVersion', [
  'version'

(version) ->
  (scope, elm) ->
    elm.text(version)
])

.directive 'clicksTo', ->
  (scope, element, attrs) ->
    $(element).on 'click', (e) ->
      e.preventDefault()
      $(element).parent().find(attrs.clicksTo).click()

.directive 'factors', ->
  restrict: 'C'
  scope: 
    factors: '=childs'
    options: '=options'
    parentFactor: '=parentFactor'
    level: '=level'
  transclude: true
  controller: 'FactorsCtrl'
  templateUrl: '/partials/factors.html'
  replace: true

.directive 'factorsTable', ->
  restrict: 'C'
  templateUrl: '/partials/factors_table.html'
  replace: true

.directive 'factorOptions', ->
  restrict: 'C'
  templateUrl: '/partials/options.html'
  replace: true