var qshop = angular.module("qshop", ['ui.router']);


// qshop.controller("MainController", function($scope, $stateParams, ProductsRepository) {
//
// });

// qshop.controller("ProductController", function($scope, $routeParams) {
//     console.log($routeParams);
// });

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
        })
        .state('product', {
            url: "/product/:id",
            templateUrl: "templates/product.html"
        });
});
