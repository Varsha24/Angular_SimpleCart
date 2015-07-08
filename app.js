(function() {
  var app = angular.module('store', ['store-directives']);

  app.controller('StoreController', ['$http', function($http){
    var store = this;
    store.products = [];
    $http.get('/store-products.json').success(function(data){
      store.products = data ;
    });
  }]);

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);

      this.review = {};
    };
  });
})();

/*app.controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(tab){
      this.tab = tab;
    };

    this.isSet = function(tab){
      return (this.tab === tab);
    };
 });
*/

/*app.controller('GalleryController', function(){
    this.current = 0;

    this.setCurrent = function(index){
      this.current = index;
    };
 });*/

 // directive configuration object defining how it works type of directive in this case its E for element 

/*app.directive('productGallery', function() {
  return {
    restrict: 'E',
    templateUrl: 'product-gallery.html',
    controller: function() {
      this.current = 0;
      this.setCurrent = function(imageNumber) {
        this.current = imageNumber || 0;
      };
    },
     controllerAs: 'gallery'
  };
});
  
app.directive("productDescription", function() {
  return {
    restrict: 'E',
    templateUrl: "product-description.html"
  };
});

app.directive("productSpecs", function() {
    return {
      restrict: 'A',
      templateUrl: "product-specs.html"
    };
 });

app.directive("productReviews", function() {
    return {
      restrict: 'E',
      templateUrl: "product-reviews.html"
    };
  });

 app.directive("productTabs", function() {
    return {
      restrict: "E",
      templateUrl: "product-tabs.html",
      controller: function() {
        this.tab = 1;

        this.isSet = function(checkTab) {
          return this.tab === checkTab;
        };

        this.setTab = function(activeTab) {
          this.tab = activeTab;
        };
      },
      controllerAs: "tab"
    };
  });


*/


