"use strict";
App.controller("MainCtrl", ["$scope", "BoardFactory", function($scope, BoardFactory){
  $scope.world = "Testing things out";


  $scope.board = BoardFactory.getBoard();
  console.log("$scope.board", $scope.board);


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
    var currentSpace = document.getElementsByClassName("player")[0]
    console.log("currentSpace", currentSpace);
    var nextSpace = currentSpace;
    for (var i = testMonster.rollAttack(0,0); i > 0; i--) {
      console.log("i", i);
      if (nextSpace.nextElementSibling) {
        nextSpace = nextSpace.nextElementSibling;
      }
      console.log("nextSpace", nextSpace);
    }
    currentSpace.classList.remove("player")
    nextSpace.classList.add("player");
    console.log("hey",
    testMonster.rollAttack(0,0)
      )
  }
}])
