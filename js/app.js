'use strict';
var App;

App = angular.module('app', ['ngCookies', 'ngResource', 'app.controllers', 'app.directives', 'app.filters', 'app.services', 'partials']);

App.config([
  '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider, config) {
    $routeProvider.when('/home', {
      templateUrl: '/partials/home.html'
    }).when('/view1', {
      templateUrl: '/partials/partial1.html'
    }).when('/view2', {
      templateUrl: '/partials/partial2.html'
    }).otherwise({
      redirectTo: '/home'
    });
    return $locationProvider.html5Mode(false);
  }
]);
'use strict';
/* Controllers*/

angular.module('app.controllers', []).controller('AppCtrl', [
  '$scope', '$location', '$resource', '$rootScope', function($scope, $location, $resource, $rootScope) {
    $scope.$location = $location;
    $scope.$watch('$location.path()', function(path) {
      return $scope.activeNavId = path || '/';
    });
    return $scope.getClass = function(id) {
      if ($scope.activeNavId.substring(0, id.length) === id) {
        return 'active';
      } else {
        return '';
      }
    };
  }
]).controller('MyCtrl1', [
  '$scope', function($scope) {
    return $scope.onePlusOne = 2;
  }
]).controller('MyCtrl2', [
  '$scope', function($scope) {
    return $scope;
  }
]).controller('HomeCtrl', [
  '$scope', function($scope) {
    $scope.factors = [
      {
        description: 'Sample Factor'
      }
    ];
    $scope.pairwise = [[]];
    $scope.pairwisefractions = [[]];
    $scope.columnSum = [];
    $scope.columnSumUnit = [];
    $scope.rowSum = [];
    $scope.$watch('pairwise', function() {
      var column, i, j, row, v1, v2, _i, _j, _k, _l, _len, _len1, _len2, _len3, _ref, _ref1, _ref2, _results;
      $scope.columnSum = [];
      $scope.columnSumUnit = [];
      $scope.rowSum = [];
      _ref = $scope.pairwise;
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        row = _ref[i];
        for (j = _j = 0, _len1 = row.length; _j < _len1; j = ++_j) {
          column = row[j];
          column = $scope.pairwisefractions[i][j] = eval(column);
          if ($scope.columnSum[j] === void 0) {
            $scope.columnSum[j] = 0;
          }
          $scope.columnSum[j] = $scope.columnSum[j] + parseFloat(column);
        }
      }
      _ref1 = $scope.factors;
      _results = [];
      for (i = _k = 0, _len2 = _ref1.length; _k < _len2; i = ++_k) {
        v1 = _ref1[i];
        if ($scope.rowSum[i] === void 0) {
          $scope.rowSum[i] = 0;
        }
        _ref2 = $scope.factors;
        for (j = _l = 0, _len3 = _ref2.length; _l < _len3; j = ++_l) {
          v2 = _ref2[j];
          if ($scope.columnSumUnit[j] === void 0) {
            $scope.columnSumUnit[j] = 0;
          }
          $scope.columnSumUnit[j] = $scope.columnSumUnit[j] + $scope.pairwisefractions[i][j] / $scope.columnSum[j];
          $scope.rowSum[i] = $scope.rowSum[i] + $scope.pairwisefractions[i][j] / $scope.columnSum[j];
        }
        _results.push($scope.rowSum[i] = $scope.rowSum[i] / $scope.factors.length);
      }
      return _results;
    }, true);
    return $scope.addFactor = function() {
      $scope.factors.push({
        description: 'New Factor'
      });
      $scope.pairwise.push([]);
      return $scope.pairwisefractions.push([]);
    };
  }
]);
'use strict';
/* Directives*/

angular.module('app.directives', ['app.services']).directive('appVersion', [
  'version', function(version) {
    return function(scope, elm, attrs) {
      return elm.text(version);
    };
  }
]);
'use strict';
/* Filters*/

angular.module('app.filters', []).filter('interpolate', [
  'version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }
]);
'use strict';
/* Sevices*/

angular.module('app.services', []).factory('version', function() {
  return "0.1";
});

//@ sourceMappingURL=app.js.map