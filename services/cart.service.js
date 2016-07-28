angular.module("qshop").factory("Cart", function($rootScope) {

    var cart = {};
    cart.products = [];

    cart.add = function(product) {
        console.log("Am adaugat produsul", product);
        cart.products.push(product);
        $rootScope.$broadcast('cart-updated');
    };

    cart.getTotalProducts = function() {
      var total = 0;
      for(var i=0;i<this.products.length;i++){
        total += this.products[i].qty;
      }
      return total;
    }

    cart.getSubTotal = function() {
        var total = 0;

        for (var i = 0; i < this.products.length; i++) {
          total += this.products[i].qty*this.products[i].price;
        }

        return total;
    };

    cart.getShipping = function() {
        return 50;
    };

    cart.getTotal = function() {
        return this.getSubTotal() + this.getShipping();
    };

    cart.getProducts = function() {
        return this.products;
    };

    return cart;

});
