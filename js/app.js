'use strict';
var App;

App = angular.module('app', ['ngCookies', 'ngResource', 'ngRoute', 'app.controllers', 'app.directives', 'app.models', 'googlechart.directives', 'app.filters', 'app.services', 'partials', 'ui.bootstrap']);

App.config([
  '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider, config) {
    $routeProvider.when('/home', {
      templateUrl: '/partials/home.html'
    }).otherwise({
      redirectTo: '/home'
    });
    return $locationProvider.html5Mode(false);
  }
]);
;var ejemplos;

ejemplos = ["eyJmYWN0b3JzIjp7Im5hbWUiOiJHZW5lcmFsIiwibWV0YSI6IlNlbGVjY2nzbiBkZSBDYXNhIiwicGFpcndpc2UiOltbMSwxLDEsMSwwLjMzMzMzMzMzMzMzMzMzMzNdLFsxLDEsMSwxLDAuMzMzMzMzMzMzMzMzMzMzM10sWzEsMSwxLDEsMC4zMzMzMzMzMzMzMzMzMzMzXSxbMSwxLDEsMSwzXSxbMywzLDMsMC4zMzMzMzMzMzMzMzMzMzMzLDFdXSwicGFpcl93aXNlX29wdGlvbnMiOltbWzEsMC4yLDFdLFs1LDEsMC4yXSxbMSw1LDFdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdXSxbWzEsMSwwLjJdLFsxLDEsMC4zMzMzMzMzMzMzMzMzMzMzXSxbNSwzLDFdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdXSxbWzEsMywzXSxbMC4zMzMzMzMzMzMzMzMzMzMzLDEsMC4yXSxbMC4zMzMzMzMzMzMzMzMzMzMzLDUsMV0sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW10sW11dLFtbMSw3LDFdLFswLjE0Mjg1NzE0Mjg1NzE0Mjg1LDEsMC4yXSxbMSw1LDFdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdXSxbWzEsMC4xNDI4NTcxNDI4NTcxNDI4NSwwLjMzMzMzMzMzMzMzMzMzMzNdLFs3LDEsNV0sWzMsMC4yLDFdXV0sImNoaWxkcyI6W3sibmFtZSI6IkFsY29iYXMiLCJtZXRhIjoiIiwicGFpcndpc2UiOltbMV1dLCJwYWlyX3dpc2Vfb3B0aW9ucyI6W1tbMV1dXSwiY2hpbGRzIjpbXX0seyJuYW1lIjoiU2FsYSIsIm1ldGEiOiIiLCJwYWlyd2lzZSI6W1sxXV0sInBhaXJfd2lzZV9vcHRpb25zIjpbW1sxXV1dLCJjaGlsZHMiOltdfSx7Im5hbWUiOiJDb2NpbmEiLCJtZXRhIjoiIiwicGFpcndpc2UiOltbMV1dLCJwYWlyX3dpc2Vfb3B0aW9ucyI6W1tbMV1dXSwiY2hpbGRzIjpbXX0seyJuYW1lIjoiWm9uYSBWZXJkZSIsIm1ldGEiOiIiLCJwYWlyd2lzZSI6W1sxXV0sInBhaXJfd2lzZV9vcHRpb25zIjpbW1sxXV1dLCJjaGlsZHMiOltdfSx7Im5hbWUiOiJQcmVjaW8iLCJtZXRhIjoiIiwicGFpcndpc2UiOltbMV1dLCJwYWlyX3dpc2Vfb3B0aW9ucyI6W1tbMV1dXSwiY2hpbGRzIjpbXX1dfSwib3B0aW9ucyI6W3siZGVzY3JpcHRpb24iOiIiLCJuYW1lIjoiQ2FzYSBlbiBlbCBiYXJyaW8gUG9ibGFkbyIsIiQkaGFzaEtleSI6IjAwOSJ9LHsibmFtZSI6IkNhc2EgZW4gZWwgYmFycmlvIENlbnRybyIsImRlc2NyaXB0aW9uIjoiIiwiJCRoYXNoS2V5IjoiMDE4In0seyJuYW1lIjoiQ2FzYSBlbiBlbCBiYXJyaW8gTGF1cmVsZXMiLCJkZXNjcmlwdGlvbiI6IiIsIiQkaGFzaEtleSI6Im9iamVjdDo2MTUifV19"];
;'use strict';

/* Controllers */
var Controllers;

Controllers = angular.module('app.controllers', []).controller('AppCtrl', [
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
]);
;var FactorController;

FactorController = (function() {
  function FactorController($scope, $rootScope, Factor) {
    var pair_wise_optionsChange, pairwiseChange;
    $scope.show_process = $rootScope.show_process;
    $scope.fractions = {
      "<<<=--": 9,
      "<<---": 7,
      "<--": 5,
      "<-": 3,
      "<->": 1,
      "->": 1 / 3,
      "-->": 1 / 5,
      "--->>": 1 / 7,
      "--=>>>": 1 / 9
    };
    $scope.$watch('parentFactor.pairwise', function() {
      return pairwiseChange();
    }, true);
    pairwiseChange = function() {
      var column, e, i, j, l, len, len1, len2, len3, m, n, o, ref, ref1, ref2, results, row, v1, v2;
      $scope.parentFactor.columnSum = [];
      $scope.parentFactor.columnSumUnit = [];
      $scope.parentFactor.rowSum = [];
      ref = $scope.parentFactor.pairwise;
      for (i = l = 0, len = ref.length; l < len; i = ++l) {
        row = ref[i];
        for (j = m = 0, len1 = row.length; m < len1; j = ++m) {
          column = row[j];
          if (i < j) {
            $scope.parentFactor.pairwise[j][i] = ((function() {
              var error;
              try {
                return 1 / eval(column);
              } catch (error) {
                e = error;
                return 0;
              }
            })());
          }
          column = $scope.parentFactor.pairwisefractions[i][j] = ((function() {
            var error;
            try {
              return eval(column);
            } catch (error) {
              e = error;
              return 0;
            }
          })());
          if ($scope.parentFactor.columnSum[j] === void 0) {
            $scope.parentFactor.columnSum[j] = 0;
          }
          $scope.parentFactor.columnSum[j] = $scope.parentFactor.columnSum[j] + parseFloat(column);
        }
      }
      ref1 = $scope.factors;
      results = [];
      for (i = n = 0, len2 = ref1.length; n < len2; i = ++n) {
        v1 = ref1[i];
        if ($scope.parentFactor.rowSum[i] === void 0) {
          $scope.parentFactor.rowSum[i] = 0;
        }
        ref2 = $scope.factors;
        for (j = o = 0, len3 = ref2.length; o < len3; j = ++o) {
          v2 = ref2[j];
          if ($scope.parentFactor.columnSumUnit[j] === void 0) {
            $scope.parentFactor.columnSumUnit[j] = 0;
          }
          $scope.parentFactor.columnSumUnit[j] = $scope.parentFactor.columnSumUnit[j] + $scope.parentFactor.pairwisefractions[i][j] / $scope.parentFactor.columnSum[j];
          $scope.parentFactor.rowSum[i] = $scope.parentFactor.rowSum[i] + $scope.parentFactor.pairwisefractions[i][j] / $scope.parentFactor.columnSum[j];
        }
        results.push($scope.parentFactor.rowSum[i] = $scope.parentFactor.rowSum[i] / $scope.factors.length);
      }
      return results;
    };
    $scope.addFactor = function() {
      var i, j, l, len, option, ref, results;
      i = $scope.parentFactor.addChild() - 1;
      $scope.parentFactor.pairwise.push([]);
      $scope.parentFactor.pairwise[i][i] = 1;
      $scope.parentFactor.pairwisefractions.push([]);
      $scope.parentFactor.pair_wise_options[i] = [];
      $scope.parentFactor.pair_wise_options_fractions[i] = [];
      ref = $scope.options;
      results = [];
      for (j = l = 0, len = ref.length; l < len; j = ++l) {
        option = ref[j];
        $scope.parentFactor.pair_wise_options[i].push([]);
        $scope.parentFactor.pair_wise_options[i][j][j] = 1;
        results.push($scope.parentFactor.pair_wise_options_fractions[i].push([]));
      }
      return results;
    };
    $scope.$watch('parentFactor.pair_wise_options', function() {
      return pair_wise_optionsChange();
    }, true);
    pair_wise_optionsChange = function() {
      var column, e, factor, i, j, k, l, len, len1, len2, m, n, ref, ref1, results, row, v1, v2;
      ref = $scope.factors;
      results = [];
      for (k = l = 0, len = ref.length; l < len; k = ++l) {
        factor = ref[k];
        $scope.parentFactor.columnSumOptions[k] = [];
        $scope.parentFactor.columnSumUnitOptions[k] = [];
        $scope.parentFactor.rowSumOptions[k] = [];
        ref1 = $scope.parentFactor.pair_wise_options[k];
        for (i = m = 0, len1 = ref1.length; m < len1; i = ++m) {
          row = ref1[i];
          for (j = n = 0, len2 = row.length; n < len2; j = ++n) {
            column = row[j];
            if (i < j) {
              $scope.parentFactor.pair_wise_options[k][j][i] = ((function() {
                var error;
                try {
                  return 1 / eval(column);
                } catch (error) {
                  e = error;
                  return 0;
                }
              })());
            }
            column = $scope.parentFactor.pair_wise_options_fractions[k][i][j] = ((function() {
              var error;
              try {
                return eval(column);
              } catch (error) {
                e = error;
                return 0;
              }
            })());
            if ($scope.parentFactor.columnSumOptions[k][j] === void 0) {
              $scope.parentFactor.columnSumOptions[k][j] = 0;
            }
            $scope.parentFactor.columnSumOptions[k][j] = $scope.parentFactor.columnSumOptions[k][j] + parseFloat(column);
          }
        }
        results.push((function() {
          var len3, len4, o, p, ref2, ref3, results1;
          ref2 = $scope.options;
          results1 = [];
          for (i = o = 0, len3 = ref2.length; o < len3; i = ++o) {
            v1 = ref2[i];
            if ($scope.parentFactor.rowSumOptions[k][i] === void 0) {
              $scope.parentFactor.rowSumOptions[k][i] = 0;
            }
            ref3 = $scope.options;
            for (j = p = 0, len4 = ref3.length; p < len4; j = ++p) {
              v2 = ref3[j];
              if ($scope.parentFactor.columnSumUnitOptions[k][j] === void 0) {
                $scope.parentFactor.columnSumUnitOptions[k][j] = 0;
              }
              $scope.parentFactor.columnSumUnitOptions[k][j] = $scope.parentFactor.columnSumUnitOptions[k][j] + $scope.parentFactor.pair_wise_options_fractions[k][i][j] / $scope.parentFactor.columnSumOptions[k][j];
              $scope.parentFactor.rowSumOptions[k][i] = $scope.parentFactor.rowSumOptions[k][i] + $scope.parentFactor.pair_wise_options_fractions[k][i][j] / $scope.parentFactor.columnSumOptions[k][j];
            }
            results1.push($scope.parentFactor.rowSumOptions[k][i] = $scope.parentFactor.rowSumOptions[k][i] / $scope.options.length);
          }
          return results1;
        })());
      }
      return results;
    };
    $scope.$watch('options', function(newValue, oldValue) {
      var factor, i, j, l, len, option, ref, results;
      ref = $scope.factors;
      results = [];
      for (i = l = 0, len = ref.length; l < len; i = ++l) {
        factor = ref[i];
        results.push((function() {
          var len1, m, ref1, results1;
          ref1 = $scope.options;
          results1 = [];
          for (j = m = 0, len1 = ref1.length; m < len1; j = ++m) {
            option = ref1[j];
            $scope.parentFactor.pair_wise_options[i].push([]);
            $scope.parentFactor.pair_wise_options[i][j][j] = 1;
            results1.push($scope.parentFactor.pair_wise_options_fractions[i].push([]));
          }
          return results1;
        })());
      }
      return results;
    }, true);
    $scope.addOption = function() {
      return $scope.options.push({
        name: 'New Option',
        description: ''
      });
    };
    $scope.$watch('parentFactor.rowSumOptions', function() {
      var factor, i, k, l, len, option, ref, results;
      $scope.parentFactor.optionsScore = [];
      ref = $scope.factors;
      results = [];
      for (k = l = 0, len = ref.length; l < len; k = ++l) {
        factor = ref[k];
        results.push((function() {
          var len1, m, ref1, results1;
          ref1 = $scope.options;
          results1 = [];
          for (i = m = 0, len1 = ref1.length; m < len1; i = ++m) {
            option = ref1[i];
            if ($scope.parentFactor.optionsScore[i] === void 0) {
              $scope.parentFactor.optionsScore[i] = {
                option: option,
                score: 0
              };
            }
            results1.push($scope.parentFactor.optionsScore[i].score = $scope.parentFactor.optionsScore[i].score + ($scope.parentFactor.rowSum[k] * $scope.parentFactor.rowSumOptions[k][i]));
          }
          return results1;
        })());
      }
      return results;
    }, true);
  }

  return FactorController;

})();

FactorController.$inject = ['$scope', '$rootScope', 'Factor'];

Controllers.controller('FactorsCtrl', FactorController);
;Controllers.controller('HomeCtrl', [
  '$scope', '$rootScope', 'Factor', function($scope, $rootScope, Factor) {
    $rootScope.pageTitle = "Analytic Hierarchy Process";
    $rootScope.show_process = false;
    $scope.rootFactor = new Factor();
    $scope.rootFactor.name = 'General';
    $scope.rootFactor.addChild();
    $scope.options = [
      {
        description: '',
        name: 'Sample Option'
      }
    ];
    $scope.saveFile = function(e) {
      var data, downloadData, filename, uriContent;
      data = {
        factors: $scope.rootFactor.getTree(),
        options: $scope.options
      };
      downloadData = $.base64.btoa(JSON.stringify(data));
      uriContent = "data:application/octet," + downloadData;
      filename = $scope.rootFactor.meta ? $scope.rootFactor.meta : 'AHP';
      angular.element(e.target).attr('href', uriContent).attr("download", filename + ".ahp");
    };
    $scope.handleFileSelect = function(element) {
      var reader;
      $scope.rootElement = angular.element(element).clone();
      $scope.selectedFile = element.files[0];
      if ($scope.selectedFile != null) {
        reader = new FileReader();
        reader.onload = (function(file) {
          return function(e) {
            var error;
            try {
              $scope.loadData(e.target.result);
              return angular.element(element).replaceWith(angular.element($scope.rootElement).clone());
            } catch (error) {
              e = error;
              return alert('Invalid file');
            }
          };
        })($scope.selectedFile);
        return reader.readAsText($scope.selectedFile);
      } else {
        return alert('Invalid file');
      }
    };
    return $scope.loadData = function(rawData) {
      var data;
      data = JSON.parse($.base64.atob(rawData));
      return $scope.$apply(function() {
        $scope.rootFactor = new Factor();
        $scope.options = data.options;
        return $scope.rootFactor.setTree(data.factors);
      });
    };
  }
]);
;'use strict';

/* Directives */
angular.module('app.directives', ['app.services']).directive('appVersion', [
  'version', function(version) {
    return function(scope, elm) {
      return elm.text(version);
    };
  }
]).directive('clicksTo', function() {
  return function(scope, element, attrs) {
    return $(element).on('click', function(e) {
      e.preventDefault();
      return $(element).parent().find(attrs.clicksTo).click();
    });
  };
}).directive('factors', function() {
  return {
    restrict: 'C',
    scope: {
      factors: '=childs',
      options: '=options',
      parentFactor: '=parentFactor',
      level: '=level'
    },
    transclude: true,
    controller: 'FactorsCtrl',
    templateUrl: '/partials/factors.html',
    replace: true
  };
}).directive('factorsTable', function() {
  return {
    restrict: 'C',
    templateUrl: '/partials/factors_table.html',
    replace: true
  };
}).directive('factorOptions', function() {
  return {
    restrict: 'C',
    templateUrl: '/partials/options.html',
    replace: true
  };
});
;'use strict';

/* Filters */
angular.module('app.filters', []).filter('interpolate', [
  'version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }
]);
;angular.module('app.models', []).factory('Factor', function() {
  var Factor;
  return Factor = (function() {
    function Factor(parent) {
      this.parent = parent || false;
      this.meta = '';
      this.name = 'New Factor';
      this.pairwise = [[]];
      this.pairwise[0][0] = 1;
      this.pairwisefractions = [[]];
      this.columnSum = [];
      this.columnSumUnit = [];
      this.rowSum = [];
      this.pair_wise_options = [[[]]];
      this.pair_wise_options[0][0][0] = 1;
      this.pair_wise_options_fractions = [[[]]];
      this.columnSumOptions = [[]];
      this.columnSumUnitOptions = [[]];
      this.rowSumOptions = [[]];
      this.optionsScore = [];
      this.childs = [];
    }

    Factor.prototype.getTree = function() {
      var child, childs, j, len, ref;
      childs = [];
      ref = this.childs;
      for (j = 0, len = ref.length; j < len; j++) {
        child = ref[j];
        childs.push(child.getTree());
      }
      return {
        name: this.name,
        meta: this.meta,
        pairwise: this.pairwise,
        pair_wise_options: this.pair_wise_options,
        childs: childs
      };
    };

    Factor.prototype.setTree = function(data) {
      var child, i, j, len, ref, results;
      this.name = data.name;
      this.meta = data.meta;
      this.pairwise = data.pairwise;
      this.pairwisefractions = angular.copy(data.pairwise);
      this.pair_wise_options = data.pair_wise_options;
      this.pair_wise_options_fractions = angular.copy(data.pair_wise_options);
      ref = data.childs;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        child = ref[j];
        i = this.addChild() - 1;
        results.push(this.childs[i].setTree(child));
      }
      return results;
    };

    Factor.prototype.getChilds = function() {
      return this.childs;
    };

    Factor.prototype.getChild = function(index) {
      return this.childs[index] || false;
    };

    Factor.prototype.addChild = function() {
      return this.childs.push(new Factor(this));
    };

    Factor.prototype.removeChild = function(index) {
      this.pairwise.splice(index, 1);
      this.pairwisefractions.splice(index, 1);
      this.pair_wise_options.splice(index, 1);
      this.pair_wise_options_fractions.splice(index, 1);
      return this.childs.splice(index, 1);
    };

    Factor.prototype.hasChilds = function() {
      return !!this.childs.length;
    };

    Factor.prototype.hasParent = function() {
      return !!parent || false;
    };

    Factor.prototype.getOptionsScore = function(index) {
      var child, j, len, notChilded, ref, result;
      result = 0;
      notChilded = true;
      if (this.hasChilds()) {
        ref = this.childs;
        for (j = 0, len = ref.length; j < len; j++) {
          child = ref[j];
          if (child.hasChilds()) {
            notChilded = false;
            result += child.getOptionsScore(index);
          }
        }
      }
      if (notChilded) {
        result = this.optionsScore[index] !== void 0 && !isNaN(this.optionsScore[index].score) ? this.optionsScore[index].score : 0;
        if (!!this.parent && this.parent.rowSum[this.parent.childs.indexOf(this)] !== void 0 && !isNaN(this.parent.rowSum[this.parent.childs.indexOf(this)]) && this.parent.rowSum[this.parent.childs.indexOf(this)] !== 0) {
          result = result * this.parent.rowSum[this.parent.childs.indexOf(this)];
        }
      }
      return result;
    };

    return Factor;

  })();
});
;'use strict';

/* Sevices */
angular.module('app.services', []).factory('version', function() {
  return "0.1";
});
;
//# sourceMappingURL=app.js.map