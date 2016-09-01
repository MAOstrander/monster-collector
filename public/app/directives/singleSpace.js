"use strict";

App.directive('singleSpace', function() {
  var linker = function(scope, elem, attrs) {
      elem.bind('click', function() {
        console.log("Click?");
        elem.css('background-color', 'chartreuse');
        scope.$apply(function() {
          scope.color = "white";
        });
      });
      elem.bind('mouseover', function() {
        elem.css('cursor', 'pointer');
      });
    }
  var testTemplate = `
    <div>
      <h2>Testing 1!</h2>
      <h2>Testing 2!</h2>
    </div>`

  return {
    restrict: 'AE',
    replace: 'true',
    template: testTemplate,
    link: linker
  };
})
