"use strict";
angular.module("MyApp", [])
.controller("MainCtrl", function($scope){
  $scope.world = "Testing things out"


  class Player {
    constructor(name) {
      this.name = name || "Bob";
      this.items = [];
      this.monsters = [];
    }

    rollMove() {
      return Math.ceil(Math.random()*6);
    }

  }

  class Monster {
    constructor() {
      this.points = 0;
      this.strength = 0;
      this.catch = 0;
    }

    rollAttack(item1, item2) {
      item1 = item1 ? item1 : 0;
      item2 = item2 ? item2 : 0;
      return Math.ceil( (Math.random()*6) + item1 + item2);
    }

  }

  var testMonster = new Monster()
  console.log(testMonster.rollAttack(1,0))
  $scope.roll= function(){
    console.log("hey",
    testMonster.rollAttack(0,0)
      )
  }
})
