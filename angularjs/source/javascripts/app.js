// 'store' application name
// [] dependencies array
// it's a good habit to wrap your javascript in a closure
(function(){
  var app = angular.module('store', ['store-directives', 'store-controllers']);

  app.controller('StoreController', ["$http", function($http){
    var store = this;
    store.products = [];
    $http.get('/javascripts/store-products.json').success(function(data){
      store.products = data;
    });
  }]);

})();


