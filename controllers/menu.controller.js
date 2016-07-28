angular.module("qshop").controller("MenuController", function($scope, Cart){

  $scope.totalProducts = 0;

  $scope.$on('cart-updated', function(){
    // var products = Cart.getProducts();
    var total = Cart.getTotalProducts();
    $scope.totalProducts = total;
  })

});
