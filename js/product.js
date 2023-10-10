$(document).ready(function () {
    var api = "https://be-semarang-7-production.up.railway.app";

    $.ajax({
        type: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        url: api + "/product",
        // url: "http://localhost:8080/product",
        success: function (data) {
            var products = JSON.parse(JSON.stringify(data));
            console.log(products);

            // Assuming products is an array of product objects

            // Iterate through the products and generate HTML for each product
            var productHTML = "";
            for (var i = 0; i < products.length; i++) {
                var product = products[i];
                productHTML += '<div class="col">';
                productHTML +=
                    '<img src="' +
                    (api + "/static/public/" + product.image) +
                    '">';
                productHTML += '<div class="product-info">';
                productHTML +=
                    '<h3 class="product-name">' + product.name + "</h3>";
                productHTML +=
                    '<h4 class="product-price" kategori="' +
                    product.kategori +
                    '" data-price="' +
                    product.price +
                    '">Rp. ' +
                    product.price +
                    "</h4>";
                productHTML += '<div class="rating">';
                // Add your rating logic here
                productHTML += "</div>";
                productHTML += '<p class="product-add">';
                productHTML +=
                    '<i class="fa fa-shopping-cart" aria-hidden="true"></i>';
                productHTML += '<span class="order">Order</span>';
                productHTML += "</p>";
                productHTML += "</div>";
                productHTML += "</div>";
            }

            // Replace the content of the container with the generated HTML
            $(".food-container").html(productHTML);
        },
    });

    function sortMenuByCategory() {
        var selectElement = document.querySelector('select[name="menu_khas"]');
        var selectedCategory = selectElement.value.toLowerCase();
        var products = document.querySelectorAll('.col');

        products.forEach(function(product) {
            var productCategory = product.querySelector('.product-price').getAttribute('kategori').toLowerCase();

            if (selectedCategory === 'semua' || productCategory === selectedCategory) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }

    document.querySelector('select[name="menu_khas"]').addEventListener('change', sortMenuByCategory);
    sortMenuByCategory(); // Call the function initially to filter based on the default category.

    if($("#searchButton").length) {
        $("#searchButton").click(searchProducts);
    }


    function searchProducts() {
        // Dapatkan kata kunci pencarian dari input
        var searchInput = document.getElementById('searchInput').value.toLowerCase();
        
        // Dapatkan semua elemen produk
        var products = document.querySelectorAll('.col');

        // Loop melalui produk dan periksa apakah nama produk cocok dengan kata kunci pencarian
        products.forEach(function(product) {
            var productName = product.querySelector('.product-name').textContent.toLowerCase();

            if (productName.includes(searchInput)) {
                product.style.display = 'block'; // Tampilkan produk yang cocok
            } else {
                product.style.display = 'none'; // Sembunyikan produk yang tidak cocok
            }
        });
    }
});
