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

  (scope, elm, attrs) ->
    elm.text(version)
])

.directive 'clicksTo', ->
  (scope, element, attrs) ->
    $(element).on 'click', (e) ->
      e.preventDefault()
      $(element).parent().find(attrs.clicksTo).click()
