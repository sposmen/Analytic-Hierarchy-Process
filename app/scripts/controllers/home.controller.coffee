Controllers.controller('HomeCtrl', [
  '$scope'
  '$rootScope'
  'Factor'

  ($scope, $rootScope, Factor) ->
    $rootScope.pageTitle = "Analytic Hierarchy Process"

    $rootScope.show_process = false

    $scope.rootFactor = new Factor()
    $scope.rootFactor.name = 'Root'

    $scope.rootFactor.addChild()

    # Proyects or Options to be evaluated
    $scope.options = [
      description: ''
      name: 'Sample Option'
    ]

    #File utility
    $scope.saveFile = (e)->
      data =
        factors: $scope.rootFactor.getTree()
        options: $scope.options

      downloadData = $.base64.btoa(JSON.stringify(data));
      uriContent = "data:application/octet," + downloadData
      filename = if $scope.rootFactor.meta then $scope.rootFactor.meta else 'AHP'
      angular.element(e.target).attr('href', uriContent).attr("download", filename + ".ahp");
      return

    $scope.handleFileSelect = (element)->
      $scope.rootElement = angular.element(element).clone()
      $scope.selectedFile = element.files[0]
      if $scope.selectedFile?
        reader = new FileReader()
        reader.onload = ((file)->
          (e)->
            try
              $scope.loadData(e.target.result)
              angular.element(element).replaceWith(angular.element($scope.rootElement).clone())
            catch e
              alert 'Invalid file')($scope.selectedFile)

        reader.readAsText $scope.selectedFile
      else
        alert 'Invalid file'

    $scope.loadData = (rawData)->
      data = JSON.parse $.base64.atob(rawData)
      $scope.$apply ->
        $scope.rootFactor = new Factor()
        $scope.options = data.options
        $scope.rootFactor.setTree(data.factors)

])
