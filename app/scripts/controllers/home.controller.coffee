Controllers.controller('HomeCtrl', [
  '$scope'
  '$rootScope'
  'Factor'

($scope, $rootScope, Factor) ->
  
  $rootScope.pageTitle = "Analytic Hierarchy Process"
  
  $scope.resetAHP=->
    #Initial Factors
    $scope.factors = [
      new Factor
    ]
    
    $scope.pairwise = [[]]
    $scope.pairwisefractions = [[]]
    
    $scope.columnSum = []
    $scope.columnSumUnit = []
    $scope.rowSum = []
    # Proyects or Options to be evaluated
    $scope.options = [
      description:''
      name:'Sample Option'
    ]
    
    $scope.pair_wise_options = [[[]]]
    $scope.pair_wise_options_fractions = [[[]]]
    
    $scope.columnSumOptions = [[]]
    $scope.columnSumUnitOptions = [[]]
    $scope.rowSumOptions = [[]]
    $scope.optionsScore = []
    
  $scope.resetAHP()
  
  $scope.$watch 'pairwise',->
    pairwiseChange()
  , true
  
  pairwiseChange=->
    $scope.columnSum = []
    $scope.columnSumUnit = []
    $scope.rowSum = []
    for row,i in $scope.pairwise
      for column,j in row
        column = $scope.pairwisefractions[i][j] = (
          try
            eval(column)
          catch e
            0
        )
        $scope.columnSum[j] = 0 if $scope.columnSum[j] is undefined
        $scope.columnSum[j] = $scope.columnSum[j] + parseFloat(column)
    for v1, i in $scope.factors
      $scope.rowSum[i] = 0 if $scope.rowSum[i] is undefined
      for v2, j in $scope.factors
        $scope.columnSumUnit[j] = 0 if $scope.columnSumUnit[j] is undefined
        $scope.columnSumUnit[j] = $scope.columnSumUnit[j] + $scope.pairwisefractions[i][j]/$scope.columnSum[j]
        $scope.rowSum[i] = $scope.rowSum[i] + $scope.pairwisefractions[i][j]/$scope.columnSum[j]
      $scope.rowSum[i] = $scope.rowSum[i]/$scope.factors.length
    
  $scope.addFactor=()->
    $scope.factors.push(new Factor)
    $scope.pairwise.push([])
    $scope.pairwisefractions.push([])
    $scope.pair_wise_options.push(([] for option in $scope.options))
    $scope.pair_wise_options_fractions.push(([] for option in $scope.options))
  
  
  
  $scope.$watch 'pair_wise_options',->
    pair_wise_optionsChange()
  , true
  
  pair_wise_optionsChange=->
    for factor,k in $scope.factors 
      $scope.columnSumOptions[k] = []
      $scope.columnSumUnitOptions[k] = []
      $scope.rowSumOptions[k] = []
      for row,i in $scope.pair_wise_options[k]
        for column,j in row
          column = $scope.pair_wise_options_fractions[k][i][j] = (
            try
              eval(column)
            catch e
              0
          )
          $scope.columnSumOptions[k][j] = 0 if $scope.columnSumOptions[k][j] is undefined
          $scope.columnSumOptions[k][j] = $scope.columnSumOptions[k][j] + parseFloat(column)
      for v1, i in $scope.options
        $scope.rowSumOptions[k][i] = 0 if $scope.rowSumOptions[k][i] is undefined
        for v2, j in $scope.options
          $scope.columnSumUnitOptions[k][j] = 0 if $scope.columnSumUnitOptions[k][j] is undefined
          $scope.columnSumUnitOptions[k][j] = $scope.columnSumUnitOptions[k][j] + $scope.pair_wise_options_fractions[k][i][j]/$scope.columnSumOptions[k][j]
          $scope.rowSumOptions[k][i] = $scope.rowSumOptions[k][i] + $scope.pair_wise_options_fractions[k][i][j]/$scope.columnSumOptions[k][j]
        $scope.rowSumOptions[k][i] = $scope.rowSumOptions[k][i]/$scope.options.length
  
  $scope.addOption=()->
    $scope.options.push(name:'New Option', description:'')
    ($scope.pair_wise_options[i].push([]) && $scope.pair_wise_options_fractions[i].push([]) ) for factor,i in $scope.factors
  
  $scope.$watch 'rowSumOptions', ->
    $scope.optionsScore = []
    for factor, k in $scope.factors
      for option, i in $scope.options
        $scope.optionsScore[i] = {option:option, score:0} if $scope.optionsScore[i] is undefined
        $scope.optionsScore[i].score = $scope.optionsScore[i].score + ($scope.rowSum[k] * $scope.rowSumOptions[k][i])
    
  , true
  
  #File utility
  $scope.saveFile=()->
    data =
      meta: angular.copy $scope.meta
      factors:angular.copy $scope.factors
      pairwise: angular.copy $scope.pairwise
      options: angular.copy $scope.options
      pair_wise_options:angular.copy $scope.pair_wise_options
    
    downloadData = $.base64.btoa(JSON.stringify(data));      
    uriContent = "data:application/octet;filename=AHP.json," + downloadData 
    newWindow=window.open(uriContent, 'AHP.json');
  
  $scope.handleFileSelect = (element)->
    $scope.selectedFile = element.files[0]
    if $scope.selectedFile?
      reader = new FileReader()

      reader.onload = ((file)->
        (e)->
          data = JSON.parse $.base64.atob(e.target.result)
          $scope.$apply ->
            $scope.resetAHP()
            $scope.meta= data.meta
            $scope.factors= data.factors
            $scope.pairwise= data.pairwise
            $scope.pairwisefractions= angular.copy data.pairwise
            $scope.options= data.options
            $scope.pair_wise_options=data.pair_wise_options
            $scope.pair_wise_options_fractions = angular.copy data.pair_wise_options
          
      )($scope.selectedFile)

      reader.readAsText $scope.selectedFile
      $(element).replaceAll($(element).clone())
    else
      alert 'Invalid file'
      
  $scope.loadData=(data)->
    
])
