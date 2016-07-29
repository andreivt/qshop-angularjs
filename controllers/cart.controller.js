angular.module("qshop").controller("CartController", function($rootScope, $scope, $state, Cart) {

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

    $scope.removeProduct = function(product) {
        Cart.remove(product);
        $scope.listProducts = Cart.getProducts();
        updateView();
    }

    $scope.sendOrder = function() {
        var order = {
            products: [],
            country: "",
            city: "",
            zipCode: ""
        };

        order.products  = $scope.listProducts;
        order.country   = $scope.country;
        order.city      = $scope.city;
        order.zipCode   = $scope.zipCode;

        Cart.sendOrder(order);
        // redirect pe prima pagina dupa ce trimitem order
        $state.go('default');
    };

});
