'use strict'

### Controllers ###

angular.module('app.controllers', [])

.controller('AppCtrl', [
  '$scope'
  '$location'
  '$resource'
  '$rootScope'

($scope, $location, $resource, $rootScope) ->

  # Uses the url to determine if the selected
  # menu item should have the class active.
  $scope.$location = $location
  $scope.$watch('$location.path()', (path) ->
    $scope.activeNavId = path || '/'
  )

  # getClass compares the current url with the id.
  # If the current url starts with the id it returns 'active'
  # otherwise it will return '' an empty string. E.g.
  #
  #   # current url = '/products/1'
  #   getClass('/products') # returns 'active'
  #   getClass('/orders') # returns ''
  #
  $scope.getClass = (id) ->
    if $scope.activeNavId.substring(0, id.length) == id
      return 'active'
    else
      return ''
])

.controller('MyCtrl1', [
  '$scope'

($scope) ->
  $scope.onePlusOne = 2
])

.controller('MyCtrl2', [
  '$scope'

($scope) ->
  $scope
])

.controller('HomeCtrl', [
  '$scope'

($scope) ->
  
  $scope.factors = [
    description:'Sample Factor'
  ]
  
  $scope.pairwise = [[]]
  $scope.pairwisefractions = [[]]
  
  $scope.columnSum = []
  $scope.columnSumUnit = []
  $scope.rowSum = []
  
  $scope.$watch 'pairwise',->
    $scope.columnSum = []
    $scope.columnSumUnit = []
    $scope.rowSum = []
    for row,i in $scope.pairwise
      for column,j in row
        column = $scope.pairwisefractions[i][j] = eval(column)
        $scope.columnSum[j] = 0 if $scope.columnSum[j] is undefined
        $scope.columnSum[j] = $scope.columnSum[j] + parseFloat(column)
    for v1, i in $scope.factors
      $scope.rowSum[i] = 0 if $scope.rowSum[i] is undefined
      for v2, j in $scope.factors
        $scope.columnSumUnit[j] = 0 if $scope.columnSumUnit[j] is undefined
        $scope.columnSumUnit[j] = $scope.columnSumUnit[j] + $scope.pairwisefractions[i][j]/$scope.columnSum[j]
        $scope.rowSum[i] = $scope.rowSum[i] + $scope.pairwisefractions[i][j]/$scope.columnSum[j]
      $scope.rowSum[i] = $scope.rowSum[i]/$scope.factors.length
  , true
    
  
  $scope.addFactor=()->
    $scope.factors.push(description:'New Factor')
    $scope.pairwise.push([])
    $scope.pairwisefractions.push([])
    
  

])

