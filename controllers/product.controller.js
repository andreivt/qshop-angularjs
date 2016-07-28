angular.module("qshop").controller("ProductController", function($scope, $stateParams, ProductsRepository, Cart) {
    $scope.tabPanel = "description";

    $scope.changeTab = function(tab) {
        $scope.tabPanel = tab;
    }

    //
    // $scope.prev = function(){
    //   $('.carousel').carousel('prev');
    // }
    // $scope.next = function(){
    //   $('.carousel').carousel('next');
    // }

    $scope.productQty = 1;
    $scope.minus = function() {
        if ($scope.productQty > 1)
            $scope.productQty -= 1;
    }
    $scope.plus = function() {
        $scope.productQty += 1;
    }

    $scope.loadProduct = function() {
        ProductsRepository.getProductsList().then(function(result) {
            var productId = $stateParams.id;
            for (var i = 0; i < result.data.length; i++) {
                if (result.data[i].id == productId) {
                    $scope.product = result.data[i];
                    break;
                }
            }
        });
    }

    $scope.addToCart = function() {
        // var allProducts = Cart.getProducts();
        var productFound = false;
        for (var i = 0; i < Cart.products.length; i++) {
            if (Cart.products[i].id == $scope.product.id) {
                Cart.products[i].qty += $scope.productQty;
                productFound = true;
                break;
            }
        }
        if (!productFound) {
            $scope.product.qty = $scope.productQty;
            Cart.add($scope.product);
        }
    }
});
