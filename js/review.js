$(document).ready(function () {
    const apiUrl = "https://backend-indonary-production.up.railway.app/review";
  
    $.ajax({
      url: apiUrl,
      method: "GET",
      success: function (data) {
        data.forEach(function (review) {
          const reviewHtml = `
              <div class="customer-review">
                <div class="customer-info">
                  <img src="Image/profil ikon.png" alt="Avatar" />
                  <h2>${review.name}</h2>
                </div>
                <div class="rating">
                  ${generateStarRating(review.rating)}
                  <p class="review-text">${review.review}</p>
                  <br />
                  <p class="date">${formatDate(review.createdAt)}</p>
                </div>
              </div>
              <br/>
            `;
  
          $("#reviews-container").append(reviewHtml);
        });
      },
      error: function (xhr, status, error) {
        console.error("Error fetching data:", error);
      },
    });
  
    function generateStarRating(rating) {
      const fullStars = Math.floor(rating);
      const halfStar =
        rating % 1 === 0.5 ? '<i class="fa fa-star-half-o"></i>' : "";
      const starIcons = '<i class="fa fa-star"></i>'.repeat(fullStars);
      return starIcons + halfStar;
    }
  
    function formatDate(dateString) {
      const date = new Date(dateString);
      return `${date.getDate()} ${getMonthName(date.getMonth())} ${date.getFullYear()}`;
    }
  
    function getMonthName(monthIndex) {
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      return monthNames[monthIndex];
    }
  });
  