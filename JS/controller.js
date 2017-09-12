/*function to read from json data file*/
var countryApp = angular.module('countryApp', []);
    countryApp.controller('CountryCtrl', function ($scope, $http){
    $http({
    method: 'GET',
    url: 'data/countries.json'
        }).then(function (success){
          var data = success.data;
          $scope.countries = data;
        },
          function (error){});
      });