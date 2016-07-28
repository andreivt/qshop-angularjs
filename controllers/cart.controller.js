angular.module("qshop").controller("CartController", function($rootScope, $scope, Cart) {

    $scope.listProducts = Cart.getProducts();
    console.log($scope.listProducts);

    $scope.minus = function(id) {
        for (var i = 0; i < $scope.listProducts.length; i++) {
            if ($scope.listProducts[i].id == id) {
                if ($scope.listProducts[i].qty > 1)
                    $scope.listProducts[i].qty -= 1;
                    updateView();
                    break;
            }
        }

    }
    $scope.plus = function(id) {
        for (var i = 0; i < $scope.listProducts.length; i++) {
            if ($scope.listProducts[i].id == id) {
                $scope.listProducts[i].qty += 1;
                updateView();
                break;
            }
        }
    }

    function updateView() {
      $scope.subTotal = Cart.getSubTotal();
      $scope.shipping = Cart.getShipping();
      $scope.orderTotal = Cart.getTotal();
      $rootScope.$broadcast('cart-updated');
    }

    updateView();

});
