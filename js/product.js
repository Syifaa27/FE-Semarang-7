$(document).ready(function() {

    var api = 'https://backend-indonary-production.up.railway.app'

    $.ajax({
        type: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        url: api + '/product',
        // url: "http://localhost:8080/product",
        success: function(data) {
            var products = JSON.parse(JSON.stringify(data));
            console.log(products)

            // Assuming products is an array of product objects

            // Iterate through the products and generate HTML for each product
            var productHTML = '';
            for (var i = 0; i < products.length; i++) {
                var product = products[i];
                productHTML += '<div class="col">';
                productHTML += '<img src="' + (api + '/static/public/' + product.image ) + '">';
                productHTML += '<div class="product-info">';
                productHTML += '<h3 class="product-name">' + product.name + '</h3>';
                productHTML += '<h4 class="product-price" kategori="' + product.kategori + '" data-price="' + product.price + '">Rp. ' + product.price + '</h4>';
                productHTML += '<div class="rating">';
                // Add your rating logic here
                productHTML += '</div>';
                productHTML += '<p class="product-add">';
                productHTML += '<i class="fa fa-shopping-cart" aria-hidden="true"></i>';
                productHTML += '<span class="order">Order</span>';
                productHTML += '</p>';
                productHTML += '</div>';
                productHTML += '</div>';
            }

            // Replace the content of the container with the generated HTML
            $(".food-container").html(productHTML);
        }
    });
});
