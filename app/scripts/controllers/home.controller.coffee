Controllers.controller('HomeCtrl', [
  '$scope'
  '$rootScope'
  'Factor'

($scope, $rootScope, Factor) ->

  $rootScope.pageTitle = "Analytic Hierarchy Process"
  
  $rootScope.show_process = false

  $scope.rootFactor = new Factor()
  $scope.rootFactor.name = 'General'
    
  $scope.rootFactor.addChild()
  
  # Proyects or Options to be evaluated
  $scope.options = [
    description:''
    name:'Sample Option'
  ]
  
  #File utility
  $scope.saveFile=()->
    data =
      factors:$scope.rootFactor.getTree()
      options:$scope.options
    
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
            $scope.rootFactor = new Factor()
            $scope.options= data.options
            $scope.rootFactor.setTree(data.factors)
            
          
      )($scope.selectedFile)

      reader.readAsText $scope.selectedFile
      $(element).replaceAll($(element).clone())
    else
      alert 'Invalid file'
      
  $scope.loadData=(data)->
    
])
