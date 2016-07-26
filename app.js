var qshop = angular.module("qshop", ['ui.router']);


qshop.controller("MainController", function($scope, ProductsRepository) {
    $scope.name = "world";
    ProductsRepository.getProductsList().then(function(result){
      $scope.products = result.data;

      var newProd = {
          "picture": "../assets/images/products/product-4.jpg",
          "name": "Produs de produs",
          "price": 12,
          "onSale": false,
          "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sagittis, massa fringilla consequat blandit, mauris ligula porta nisi, non tristique enim sapien vel nisl. Suspendisse vestibulum lobortis dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent nec tempus nibh. Donec mollis commodo metus et fringilla. Etiam venenatis, diam id adipiscing convallis, nisi eros lobortis tellus, feugiat adipiscing ante ante sit amet dolor. Vestibulum vehicula scelerisque facilisis. Sed faucibus placerat bibendum. Maecenas sollicitudin commodo justo, quis hendrerit leo consequat ac. Proin sit amet risus sapien, eget interdum dui. Proin justo sapien, varius sit amet hendrerit id, egestas quis mauris."
      };
      $scope.products.push(newProd);
      
      console.log('Products', result.data);
    }, function(error){
      console.error(error);
    });

});

qshop.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
        .state('default', {
            url: "/",
            templateUrl: "templates/firstpage.html"
        })
        .state('contact', {
            url: "/contact",
            templateUrl: "templates/contact.html"
        })
        .state('login', {
            url: "/login",
            templateUrl: "templates/login.html"
        })
        .state('products', {
            url: "/products",
            templateUrl: "templates/products.html"
        })
        .state('about', {
            url: "/about",
            templateUrl: "templates/about.html"
        })
        .state('register', {
            url: "/register",
            templateUrl: "templates/register.html"
        });
});

qshop.factory("ProductsRepository", function($http) {
    var repo = {};

    repo.getProductsList = function() {
        return $http.get('data/products.json', {});
    }
    return repo;
});
