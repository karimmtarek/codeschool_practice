(function(){

  var app = angular.module('store-controllers', []);

  app.controller('PanelController', function(){
    // set initial tab
    this.tab = 4;

    this.selectTab = function(setTab){
      this.tab = setTab;
    };

    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
  });


})();