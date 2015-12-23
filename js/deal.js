$(document).ready(function() {

  $("#locationBtn").on("click", function(e) {

    e.preventDefault();
    
    var userZipcode = $("#userZipcode").val().trim();
    
    var sqootAPIdeals = "http://api.sqoot.com/v2/deals?api_key=fflt53&callback=?";
    var sqootAPIcoupons = "http://api.sqoot.com/v2/coupons?api_key=fflt53&callback=query";


    function sqootDealSuccessHandler(response) {
      var sqootDealAPIParams = {
        format: json,
        deal_address: query.location.address,
        deal_state: query.location.region,
        deal_title: deals.deal.title,
        short_title: deals.deal.short_title,
      }

      $.ajax ({
        type:'GET',
        url: sqootAPIdeals,
        data: 'format=json&id=123',
        success: sqootDealSuccessHandler,
        dataType: 'json'
      });

      var dealAmount = jquery.id;
      for (var i=0; i<dealAmount.length; i++) {
        var newCol = buildDealThumbnail(dealAmount[i]);
        $("#dealsRow").append(dealCol);
      }
    }

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



      function sqootCouponSuccessHandler(response) {
        var sqootCouponAPIParams = {
          format: json,
          coupon_address: query.location.address,
          coupon_state: query.location.region,
          coupon_title: coupons.coupon.title,
        }

        $.ajax ({
          type:'GET',
          url: sqootAPIcoupons,
          data: 'format=json&id=123',
          success: sqootCouponSuccessHandler,
          dataType: 'json'
        });

        var couponAmount = jquery.id;
        for (var i=0; i <couponAmount.length; i++) {
          var couponCol = buildCouponThumbnail(couponAmount[i]);
          $("#couponsRow").append(couponCol);
        }
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

buildCouponThumbnail();
buildDealThumbnail();
sqootDealSuccessHandler();
sqootCouponSuccessHandler();

});

