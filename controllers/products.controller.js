angular.module("qshop").controller("ProductsController", function($scope, ProductsRepository, Cart) {

    ProductsRepository.getProductsList().then(function(result) {
        $scope.products = result.data;

        var newProd = {
            "id": 4,
            "picture": "../assets/images/products/product-4.jpg",
            "name": "Produs de produs",
            "price": 12,
            "onSale": true,
            "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sagittis, massa fringilla consequat blandit, mauris ligula porta nisi, non tristique enim sapien vel nisl. Suspendisse vestibulum lobortis dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent nec tempus nibh. Donec mollis commodo metus et fringilla. Etiam venenatis, diam id adipiscing convallis, nisi eros lobortis tellus, feugiat adipiscing ante ante sit amet dolor. Vestibulum vehicula scelerisque facilisis. Sed faucibus placerat bibendum. Maecenas sollicitudin commodo justo, quis hendrerit leo consequat ac. Proin sit amet risus sapien, eget interdum dui. Proin justo sapien, varius sit amet hendrerit id, egestas quis mauris."
        };
        $scope.products.push(newProd);

        // console.log('Products', result.data);
    }, function(error) {
        console.error(error);
    });

    $scope.addToCart = function(product) {
        var allProducts = Cart.getProducts();
        var productFound = false;
        for (var i = 0; i < allProducts.length; i++) {
            if (allProducts[i].id == product.id) {
                allProducts[i].qty += 1;
                productFound = true;
                break;
            }
        }
        if (!productFound) {
            product.qty = 1;
            Cart.add(product);
        }
    }

});
