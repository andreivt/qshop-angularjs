angular.module("qshop").factory("ProductsRepository", function($http) {
    var repo = {};

    repo.getProductsList = function() {
        return $http.get('data/products.json', {});
    }
    return repo;
});
