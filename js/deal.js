$(document).ready(function() {

  $("#locationBtn").on("click", function(e) {

    e.preventDefault();
    
    var sqootAPIdeals = "http://api.sqoot.com/v2/deals?api_key=fflt53&callback=";
    var sqootAPIcoupons = "http://api.sqoot.com/v2/coupons?api_key=fflt53&callback=";


    function sqootDealSuccessHandler() {


      $.ajax ({
        type:'GET',
        url: sqootAPIdeals,
        data: { 
        deal_address: sqootAPIdeals + query.location.address,
        deal_state: sqootAPIdeals + query.location.region,
        deal_title: sqootAPIdeals + deals.deal.title,
        short_title: sqootAPIdeals + deals.deal.short_title},
        success: sqootDealSuccessHandler,
        dataType: 'json'
      });


    }
    
    buildDealThumbnail()

  })


    function buildDealThumbnail() {

      var colDealDiv = $("<div>").addClass("col-md-4");
      var thumbnailDealDiv = $("<div>").addClass("thumbnail");
      var captionDiv = $("<div>").addClass("caption");
      var dealTitle = $("<p>").append(deal_title);
      var dealState = $("<p>").append(deal_state);
      var dealAddress = $("<p>").append(deal_address);

      return colDealDiv.append(thumbnailDealDiv
        .append(dealTitle)
        .append(captionDiv
          .append(dealTitle)
          .append(dealState)
          .append(deal_address)
          )
        );
    }



      function sqootCouponSuccessHandler() {

        $.ajax ({
          type:'GET',
          url: sqootAPIcoupons,
          data: { 
          coupon_address: sqootAPIcoupons + query.location.address,
          coupon_state: sqootAPIcoupons + query.location.region,
          coupon_title: sqootAPIcoupons + query.coupons.coupon.title 
        },
          success: sqootCouponSuccessHandler,
          dataType: 'json'
        });

buildCouponThumbnail();

      }

      function buildCouponThumbnail () {

        var colCouponDiv = $("<div>").addClass("col-md-4");
        var thumbnailCouponDiv = $("<div>").addClass("thumbnail");
        var captionDiv = $("<div>").addClass("caption");
        var couponTitle = $("<p>").append(coupon_title);
        var couponState = $("<p>").append(coupon_state);
        var couponAddress = $("<p>").append(coupon_address);

        return $("#couponsRow").append(colCouponDiv
          .append(thumbnailCouponDiv
            .append(couponTitle)
            .append(captionDiv
              .append(couponTitle)
              .append(couponState)
              .append(coupon_address)
              )
            )
          );
      }



});

