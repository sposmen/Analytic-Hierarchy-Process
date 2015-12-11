class FactorController
  constructor: ($scope, $rootScope, Factor) ->
    $scope.show_process = $rootScope.show_process

    $scope.fractions =
      "9": 9
      "7": 7
      "5": 5
      "3": 3
      "1": 1
      "1/3": 1 / 3
      "1/5": 1 / 5
      "1/7": 1 / 7
      "1/9": 1 / 9

    $scope.$watch 'parentFactor.pairwise', ->
      pairwiseChange()
    , true

    pairwiseChange = ->
      $scope.parentFactor.columnSum = []
      $scope.parentFactor.columnSumUnit = []
      $scope.parentFactor.rowSum = []
      for row,i in $scope.parentFactor.pairwise
        for column,j in row
          if i < j
            $scope.parentFactor.pairwise[j][i] = (
              try
                1 / eval(column)
              catch e
                0
            )
          column = $scope.parentFactor.pairwisefractions[i][j] = (
            try
              eval(column)
            catch e
              0
          )
          $scope.parentFactor.columnSum[j] = 0 if $scope.parentFactor.columnSum[j] is undefined
          $scope.parentFactor.columnSum[j] = $scope.parentFactor.columnSum[j] + parseFloat(column)
      for v1, i in $scope.factors
        $scope.parentFactor.rowSum[i] = 0 if $scope.parentFactor.rowSum[i] is undefined
        for v2, j in $scope.factors
          $scope.parentFactor.columnSumUnit[j] = 0 if $scope.parentFactor.columnSumUnit[j] is undefined
          $scope.parentFactor.columnSumUnit[j] = $scope.parentFactor.columnSumUnit[j] + $scope.parentFactor.pairwisefractions[i][j] / $scope.parentFactor.columnSum[j]
          $scope.parentFactor.rowSum[i] = $scope.parentFactor.rowSum[i] + $scope.parentFactor.pairwisefractions[i][j] / $scope.parentFactor.columnSum[j]
        $scope.parentFactor.rowSum[i] = $scope.parentFactor.rowSum[i] / $scope.factors.length

    $scope.addFactor = ()->
      i = $scope.parentFactor.addChild() - 1
      $scope.parentFactor.pairwise.push([])
      $scope.parentFactor.pairwise[i][i] = 1
      $scope.parentFactor.pairwisefractions.push([])
      $scope.parentFactor.pair_wise_options[i] = []
      $scope.parentFactor.pair_wise_options_fractions[i] = []
      for option, j in $scope.options
        $scope.parentFactor.pair_wise_options[i].push([])
        $scope.parentFactor.pair_wise_options[i][j][j] = 1
        $scope.parentFactor.pair_wise_options_fractions[i].push([])

    $scope.$watch 'parentFactor.pair_wise_options', ->
      pair_wise_optionsChange()
    , true

    pair_wise_optionsChange = ->
      for factor,k in $scope.factors
        $scope.parentFactor.columnSumOptions[k] = []
        $scope.parentFactor.columnSumUnitOptions[k] = []
        $scope.parentFactor.rowSumOptions[k] = []
        for row,i in $scope.parentFactor.pair_wise_options[k]
          for column,j in row
            if i < j
              $scope.parentFactor.pair_wise_options[k][j][i] = (
                try
                  1 / eval(column)
                catch e
                  0
              )
            column = $scope.parentFactor.pair_wise_options_fractions[k][i][j] = (
              try
                eval(column)
              catch e
                0
            )
            $scope.parentFactor.columnSumOptions[k][j] = 0 if $scope.parentFactor.columnSumOptions[k][j] is undefined
            $scope.parentFactor.columnSumOptions[k][j] = $scope.parentFactor.columnSumOptions[k][j] + parseFloat(column)
        for v1, i in $scope.options
          $scope.parentFactor.rowSumOptions[k][i] = 0 if $scope.parentFactor.rowSumOptions[k][i] is undefined
          for v2, j in $scope.options
            $scope.parentFactor.columnSumUnitOptions[k][j] = 0 if $scope.parentFactor.columnSumUnitOptions[k][j] is undefined
            $scope.parentFactor.columnSumUnitOptions[k][j] = $scope.parentFactor.columnSumUnitOptions[k][j] + $scope.parentFactor.pair_wise_options_fractions[k][i][j] / $scope.parentFactor.columnSumOptions[k][j]
            $scope.parentFactor.rowSumOptions[k][i] = $scope.parentFactor.rowSumOptions[k][i] + $scope.parentFactor.pair_wise_options_fractions[k][i][j] / $scope.parentFactor.columnSumOptions[k][j]
          $scope.parentFactor.rowSumOptions[k][i] = $scope.parentFactor.rowSumOptions[k][i] / $scope.options.length

    $scope.$watch 'options', (newValue, oldValue) ->
      for factor,i in $scope.factors
        for option, j in $scope.options
          $scope.parentFactor.pair_wise_options[i].push([])
          $scope.parentFactor.pair_wise_options[i][j][j] = 1
          $scope.parentFactor.pair_wise_options_fractions[i].push([])
    , true

    $scope.addOption = ()->
      $scope.options.push(name: 'New Option', description: '')


    $scope.$watch 'parentFactor.rowSumOptions', ->
      $scope.parentFactor.optionsScore = []
      for factor, k in $scope.factors
        for option, i in $scope.options
          $scope.parentFactor.optionsScore[i] = {
            option: option,
            score: 0
          } if $scope.parentFactor.optionsScore[i] is undefined
          $scope.parentFactor.optionsScore[i].score = $scope.parentFactor.optionsScore[i].score + ($scope.parentFactor.rowSum[k] * $scope.parentFactor.rowSumOptions[k][i])
    , true


FactorController.$inject = ['$scope', '$rootScope', 'Factor']


Controllers.controller 'FactorsCtrl', FactorController
