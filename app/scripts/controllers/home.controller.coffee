Controllers.controller('HomeCtrl', [
  '$scope'
  '$rootScope'
  'Factor'

($scope, $rootScope, Factor) ->

  $rootScope.pageTitle = "Analytic Hierarchy Process"

  $scope.rootFactor = new Factor()
    
  $scope.rootFactor.addChild()
  
  # Proyects or Options to be evaluated
  $scope.options = [
    description:''
    name:'Sample Option'
  ]
  
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
