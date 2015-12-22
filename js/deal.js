$(document).ready(function() {

  $("#locationBtn").on("click", function(e) {

    e.preventDefault();
    
    var userZipcode = $("#userZipcode").val().trim();
    var sqootAPIdeals = "http://api.sqoot.com/v2/deals?api_key=fflt53&callback=?";
    var sqootAPIcoupons = "http://api.sqoot.com/v2/coupons?api_key=fflt53&callback=?";


    console.log(userZipcode);


    function sqootDealSuccessHandler(response) {
      var sqootDealAPIParams = {
        api_key: "fflt53",
        format: json,
        nojsoncallback: 1,
        deal_address: query.location.address,
        deal_state: query.location.region,
        deal_title: deals.deal.title,
        short_title: deals.deal.short_title,
      }

      $.ajax ({
        type:'GET',
        url: sqootAPIdeals + $.param(sqootDealAPIParams),
        data: 'format=json&id=123',
        success: sqootDealSuccessHandler,
        dataType: 'jsonp'
      });
    }

    function buildDealThumbnail() {
      var colDiv = $("<div>").addClass("col-md-4");
      var thumbnailDiv = $("<div>").addClass("thumbnail");
      var dealTitle = $("<p>").append(deal_title);
      var dealState = $("<p>").append(deal_state);
      var dealAddress = $("<p>").append(deal_address);
    }

    function sqootCouponSuccessHandler(response) {
      var sqootCouponAPIParams = {
        api_key: "fflt53",
        format: json,
        nojsoncallback: 1,
        coupon_address: query.location.address,
        coupon_state: query.location.region,
        coupon_title: coupons.coupon.title,
      }

      $.ajax ({
        type:'GET',
        url: sqootAPIcoupons + $.param(sqootCouponAPIParams),
        data: 'format=json&id=123',
        success: sqootCouponSuccessHandler,
        dataType: 'jsonp'
      });
    }

    function buildCouponThumbnail () {
      var colDiv = $("<div>").addClass("col-md-4");
      var thumbnailDiv = $("<div>").addClass("thumbnail");
      var couponTitle = $("<p>").append(coupon_title);
      var couponState = $("<p>").append(coupon_state);
      var couponAddress = $("<p>").append(coupon_address);
    }

  });


});
