(function(){

  var app = angular.module('store-directives', []);

  app.directive('productTitle', function(){
    return{
      restrict: 'E',
      templateUrl: 'product-title.html'
    };
  });

  app.directive('productNav', function(){
    return{
      restrict: 'A',
      templateUrl: 'nav-pills.html'
    };
  });

  app.directive('reviewForm', function(){
    return{
      restrict: 'E',
      templateUrl: 'review-form.html',
      controller: function(){
        this.review = {};
        this.addReview = function(product){
          product.reviews.push(this.review);
          this.review = {};
        };
      },
      controllerAs: 'reviewCtrl'
    };
  });

})();