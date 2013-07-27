Controllers.controller('HomeCtrl', [
  '$scope'

($scope) ->
  
  #Initial Factors
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
    $scope.pair_wise_options.push(([] for option in $scope.options))
    $scope.pair_wise_options_fractions.push(([] for option in $scope.options))
  
  # Proyects or Options to be evaluated
  $scope.options = [
    description:'Sample Option'
  ]
  
  $scope.pair_wise_options = [[[]]]
  $scope.pair_wise_options_fractions = [[[]]]
  
  $scope.columnSumOptions = [[]]
  $scope.columnSumUnitOptions = [[]]
  $scope.rowSumOptions = [[]]
  
  $scope.$watch 'pair_wise_options',->
    for factor,k in $scope.factors 
      $scope.columnSumOptions[k] = []
      $scope.columnSumUnitOptions[k] = []
      $scope.rowSumOptions[k] = []
      for row,i in $scope.pair_wise_options[k]
        for column,j in row
          column = $scope.pair_wise_options_fractions[k][i][j] = eval(column)
          $scope.columnSumOptions[k][j] = 0 if $scope.columnSumOptions[k][j] is undefined
          $scope.columnSumOptions[k][j] = $scope.columnSumOptions[k][j] + parseFloat(column)
      for v1, i in $scope.options
        $scope.rowSumOptions[k][i] = 0 if $scope.rowSumOptions[k][i] is undefined
        for v2, j in $scope.options
          $scope.columnSumUnitOptions[k][j] = 0 if $scope.columnSumUnitOptions[k][j] is undefined
          $scope.columnSumUnitOptions[k][j] = $scope.columnSumUnitOptions[k][j] + $scope.pair_wise_options_fractions[k][i][j]/$scope.columnSumOptions[k][j]
          $scope.rowSumOptions[k][i] = $scope.rowSumOptions[k][i] + $scope.pair_wise_options_fractions[k][i][j]/$scope.columnSumOptions[k][j]
        $scope.rowSumOptions[k][i] = $scope.rowSumOptions[k][i]/$scope.options.length
  , true
  
  $scope.addOption=()->
    $scope.options.push(description:'New Option')
    ($scope.pair_wise_options[i].push([]) && $scope.pair_wise_options_fractions[i].push([]) ) for factor,i in $scope.factors
  
  $scope.optionsScore = []
  
  $scope.$watch 'rowSumOptions', ->
    $scope.optionsScore = []
    for factor, k in $scope.factors
      for option, i in $scope.options
        $scope.optionsScore[i] = {option:option, score:0} if $scope.optionsScore[i] is undefined
        $scope.optionsScore[i].score = $scope.optionsScore[i].score + ($scope.rowSum[k] * $scope.rowSumOptions[k][i])
    
  , true
    
])
