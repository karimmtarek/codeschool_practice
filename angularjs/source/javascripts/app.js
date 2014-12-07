// 'store' application name
// [] dependencies array
// it's a good habit to wrap your javascript in a closure
(function(){
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    // add a new property to the app
    this.products = gems;
  });

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

  // app.controller('ReviewController', function(){
  //   this.review = {};
  //   this.addReview = function(product){
  //     product.reviews.push(this.review);
  //     this.review = {};
  //   };
  // });

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

  app.directive('productTitle', function(){
    return{
      restrict: 'E',
      templateUrl: 'product-title.html'
    };
  });

  app.directive('navPills', function(){
    return{
      restrict: 'A',
      templateUrl: 'nav-pills.html'
    };
  });

  var gems = [
    {
      name: 'Product #1',
      price: 2,
      description: 'Product #1 description',
      images: [
        {
          full: 'http://karimtarek.com/img/portfolio/projects-thumbs_0010_web-cream.png',
          thumb: ''
        }
      ],
      reviews: [
        {
          stars: 5,
          body: "I love this products",
          author: "joe@thomas.com"
        },
        {
          stars: 3,
          body: "Not really sure about this products",
          author: "john@du.com"
        }
      ],
      canPurchace: false,
      soldOut: false
    },
    {
      name: 'Product #2',
      price: 5.95,
      description: 'Product #2 description',
      images: [
        {
          full: 'http://karimtarek.com/img/portfolio/projects-thumbs_0004_msf-me.png',
          thumb: ''
        }
      ],
      reviews: [],
      canPurchace: false,
      soldOut: false
    },
    {
      name: 'Product #3',
      price: 4.95,
      description: 'Product #3 description',
      images: [
        {
          full: 'http://karimtarek.com/img/portfolio/projects-thumbs_0001_qaswlasq.png',
          thumb: ''
        }
      ],
      reviews: [],
      canPurchace: true,
      soldOut: false
    }
  ];

})();


