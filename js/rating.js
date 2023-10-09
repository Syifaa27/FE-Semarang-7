$(document).ready(function() {
    $.ajax({  
        type: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        url: "https://your-api-url-here",
        success: function (data) {
            // Assuming 'data' is an array of review objects
            var reviewsHTML = '';
            data.forEach(function(review) {
                reviewsHTML += '<div class="review">';
                reviewsHTML += '<h4>' + review.nama + '</h4>';
                reviewsHTML += '<p>Rating: ' + review.rating + '</p>';
                reviewsHTML += '<p>' + review.ulasan + '</p>';
                reviewsHTML += '</div>';
            });

            // Replace the content of the "reviews-container" with the generated HTML
            $("#reviews-container").html(reviewsHTML);
        }
    });
});
