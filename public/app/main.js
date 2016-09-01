"use strict";
var App = angular.module("BasicBoardgame", ["ngRoute"])

.config(function ($routeProvider) {
  $routeProvider
  // .when("/", {
  //   templateUrl: 'boards.html',
  //   controller: "BoardsCtrl"
  // })
  // .when("/:spaceId", {
  //   templateUrl: 'space.html',
  //   controller: "spaceCtrl"
  // })
  .otherwise({
    redirectTo: "/"
  })
})
