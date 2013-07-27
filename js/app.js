"use strict";var App;App=angular.module("app",["ngCookies","ngResource","app.controllers","app.directives","googlechart.directives","app.filters","app.services","partials"]),App.config(["$routeProvider","$locationProvider",function(e,t){return e.when("/home",{templateUrl:"/partials/home.html"}).when("/view1",{templateUrl:"/partials/partial1.html"}).when("/view2",{templateUrl:"/partials/partial2.html"}).otherwise({redirectTo:"/home"}),t.html5Mode(!1)}]);var Controllers;Controllers=angular.module("app.controllers",[]).controller("AppCtrl",["$scope","$location","$resource","$rootScope",function(e,t){return e.$location=t,e.$watch("$location.path()",function(t){return e.activeNavId=t||"/"}),e.getClass=function(t){return e.activeNavId.substring(0,t.length)===t?"active":""}}]).controller("MyCtrl1",["$scope",function(e){return e.onePlusOne=2}]).controller("MyCtrl2",["$scope",function(e){return e}]),Controllers.controller("HomeCtrl",["$scope",function($scope){return $scope.factors=[{description:"Sample Factor"}],$scope.pairwise=[[]],$scope.pairwisefractions=[[]],$scope.columnSum=[],$scope.columnSumUnit=[],$scope.rowSum=[],$scope.$watch("pairwise",function(){var column,i,j,row,v1,v2,_i,_j,_k,_l,_len,_len1,_len2,_len3,_ref,_ref1,_ref2,_results;for($scope.columnSum=[],$scope.columnSumUnit=[],$scope.rowSum=[],_ref=$scope.pairwise,i=_i=0,_len=_ref.length;_len>_i;i=++_i)for(row=_ref[i],j=_j=0,_len1=row.length;_len1>_j;j=++_j)column=row[j],column=$scope.pairwisefractions[i][j]=eval(column),void 0===$scope.columnSum[j]&&($scope.columnSum[j]=0),$scope.columnSum[j]=$scope.columnSum[j]+parseFloat(column);for(_ref1=$scope.factors,_results=[],i=_k=0,_len2=_ref1.length;_len2>_k;i=++_k){for(v1=_ref1[i],void 0===$scope.rowSum[i]&&($scope.rowSum[i]=0),_ref2=$scope.factors,j=_l=0,_len3=_ref2.length;_len3>_l;j=++_l)v2=_ref2[j],void 0===$scope.columnSumUnit[j]&&($scope.columnSumUnit[j]=0),$scope.columnSumUnit[j]=$scope.columnSumUnit[j]+$scope.pairwisefractions[i][j]/$scope.columnSum[j],$scope.rowSum[i]=$scope.rowSum[i]+$scope.pairwisefractions[i][j]/$scope.columnSum[j];_results.push($scope.rowSum[i]=$scope.rowSum[i]/$scope.factors.length)}return _results},!0),$scope.addFactor=function(){var e;return $scope.factors.push({description:"New Factor"}),$scope.pairwise.push([]),$scope.pairwisefractions.push([]),$scope.pair_wise_options.push(function(){var t,n,r,i;for(r=$scope.options,i=[],t=0,n=r.length;n>t;t++)e=r[t],i.push([]);return i}()),$scope.pair_wise_options_fractions.push(function(){var t,n,r,i;for(r=$scope.options,i=[],t=0,n=r.length;n>t;t++)e=r[t],i.push([]);return i}())},$scope.options=[{description:"Sample Option"}],$scope.pair_wise_options=[[[]]],$scope.pair_wise_options_fractions=[[[]]],$scope.columnSumOptions=[[]],$scope.columnSumUnitOptions=[[]],$scope.rowSumOptions=[[]],$scope.$watch("pair_wise_options",function(){var column,factor,i,j,k,row,v1,v2,_i,_j,_k,_len,_len1,_len2,_ref,_ref1,_results;for(_ref=$scope.factors,_results=[],k=_i=0,_len=_ref.length;_len>_i;k=++_i){for(factor=_ref[k],$scope.columnSumOptions[k]=[],$scope.columnSumUnitOptions[k]=[],$scope.rowSumOptions[k]=[],_ref1=$scope.pair_wise_options[k],i=_j=0,_len1=_ref1.length;_len1>_j;i=++_j)for(row=_ref1[i],j=_k=0,_len2=row.length;_len2>_k;j=++_k)column=row[j],column=$scope.pair_wise_options_fractions[k][i][j]=eval(column),void 0===$scope.columnSumOptions[k][j]&&($scope.columnSumOptions[k][j]=0),$scope.columnSumOptions[k][j]=$scope.columnSumOptions[k][j]+parseFloat(column);_results.push(function(){var e,t,n,r,o,a,s;for(o=$scope.options,s=[],i=e=0,t=o.length;t>e;i=++e){for(v1=o[i],void 0===$scope.rowSumOptions[k][i]&&($scope.rowSumOptions[k][i]=0),a=$scope.options,j=r=0,n=a.length;n>r;j=++r)v2=a[j],void 0===$scope.columnSumUnitOptions[k][j]&&($scope.columnSumUnitOptions[k][j]=0),$scope.columnSumUnitOptions[k][j]=$scope.columnSumUnitOptions[k][j]+$scope.pair_wise_options_fractions[k][i][j]/$scope.columnSumOptions[k][j],$scope.rowSumOptions[k][i]=$scope.rowSumOptions[k][i]+$scope.pair_wise_options_fractions[k][i][j]/$scope.columnSumOptions[k][j];s.push($scope.rowSumOptions[k][i]=$scope.rowSumOptions[k][i]/$scope.options.length)}return s}())}return _results},!0),$scope.addOption=function(){var e,t,n,r,i,o;for($scope.options.push({description:"New Option"}),i=$scope.factors,o=[],t=n=0,r=i.length;r>n;t=++n)e=i[t],o.push($scope.pair_wise_options[t].push([])&&$scope.pair_wise_options_fractions[t].push([]));return o},$scope.optionsScore=[],$scope.$watch("rowSumOptions",function(){var e,t,n,r,i,o,a,s;for($scope.optionsScore=[],a=$scope.factors,s=[],n=i=0,o=a.length;o>i;n=++i)e=a[n],s.push(function(){var e,i,o,a;for(o=$scope.options,a=[],t=e=0,i=o.length;i>e;t=++e)r=o[t],void 0===$scope.optionsScore[t]&&($scope.optionsScore[t]={option:r,score:0}),a.push($scope.optionsScore[t].score=$scope.optionsScore[t].score+$scope.rowSum[n]*$scope.rowSumOptions[n][t]);return a}());return s},!0)}]),angular.module("app.directives",["app.services"]).directive("appVersion",["version",function(e){return function(t,n){return n.text(e)}}]),angular.module("app.filters",[]).filter("interpolate",["version",function(e){return function(t){return String(t).replace(/\%VERSION\%/gm,e)}}]),angular.module("app.services",[]).factory("version",function(){return"0.1"});
//@ sourceMappingURL=app.js.map