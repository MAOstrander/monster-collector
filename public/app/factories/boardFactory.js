"use strict";
App.factory("BoardFactory", function(){
  var board = [
    {
      "id": 0,
      "space": "town",
      "name": "Starterville"
    }
  ]

  function expandWild(spaces) {
    for (var i = 0; i < spaces; i++) {
      var newSpace = {
        "id": board.length,
        "space": "wild"
      }
      board.push(newSpace)
    }
  }

  function addTown(townName) {
    var newSpace = {
      "id": board.length,
      "space": "town",
      "name": townName || "Town"
    }

    board.push(newSpace)
  }

  expandWild(8)
  addTown("Testropolis")
  expandWild(4)

  function getBoard() {
    return board;
  }

  return {getBoard}

})
