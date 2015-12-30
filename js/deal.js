

$(document).ready(function() {


 $("button").click(function (e) {

  e.preventDefault();

  var userLocation = $("#userLocation").val().trim();

  var sqootDealAPI = "http://api.sqoot.com/v2/deals?api_key=fflt53&callback=?";
  sqootDealAPI += userLocation;

  $.getJSON(sqootDealAPI, {
    action: "query",
    list: "search",
    format: "json"
  }, 

  function (data) {
    console.log(data);
    $("#dealsRow").empty();

    $.each(data.deals, function buildDealThumbnail (i, item) {

      var api_key = "fflt53";
      var dealId = data.deals[i].deal.id;
      var categoryName = $("<p>").append(data.deals[i].deal.category_name);
      var dealTitle = $("<p>").append(data.deals[i].deal.title);
      var merchantName = $("<p>").append(data.deals[i].deal.merchant.name);
      var merchantLocality = $("<p>").append(data.deals[i].deal.merchant.locality);
      var merchantRegion = $("<p>").append(data.deals[i].deal.merchant.region);
      var dealImage =$("<img>").attr("src", data.deals[i].deal.image_url).addClass("thumbnailImage");

      var colDealDiv = $("<div>").attr("id", "colDealDiv").addClass("row col-md-8 col-md-offset-2");
      var thumbnailDealDiv = $("<div>").attr("id", "thumbnailDealDiv").addClass("thumbnail");
      var captionDiv = $("<div>").attr("id", "captionDealDiv").addClass("caption");



      $("#dealsRow").append(colDealDiv
        .append(thumbnailDealDiv
          .append(captionDiv
            .append(categoryName)
            .append(dealTitle)
            .append(merchantName)
            .append(merchantLocality)
            .append(merchantRegion)
            .append(dealImage)
            )
          )
        );
    });

});   

  var userLocation = $("#userLocation").val().trim();

  var sqootCouponAPI = "http://api.sqoot.com/v2/coupons?api_key=fflt53&callback=?";
  sqootCouponAPI += userLocation;


$.getJSON(sqootCouponAPI, {
  action: "query",
  list: "search",
  format: "json"
}, 

function (data) {
  console.log(data);

  $("#couponsRow").empty();

  $.each(data.coupons, function buildCouponThumbnail (i, item) {

    var api_key = "fflt53";
    var couponId = data.coupons[i].coupon.id;
    var categoryName = $("<p>").append(data.coupons[i].coupon.category_name);
    var couponTitle = $("<p>").append(data.coupons[i].coupon.title);
    var merchantName = $("<p>").append(data.coupons[i].coupon.merchants[0].merchant.name);
    var merchantLocality = $("<p>").append(data.coupons[i].coupon.merchants[0].merchant.locality);
    var merchantRegion = $("<p>").append(data.coupons[i].coupon.merchants[0].merchant.region);
    var couponImage = $("<img>").attr("src", data.coupons[i].coupon.image_url).addClass("thumbnailImage");

    var colCouponDiv = $("<div>").attr("id", "colCouponDiv").addClass("row col-md-8 col-md-offset-2");
    var thumbnailCouponDiv = $("<div>").attr("id", "thumbnailCouponDiv").addClass("thumbnail");
    var captionDiv = $("<div>").attr("id", "captionCouponDiv").addClass("caption");

    $("#couponsRow").append(colCouponDiv
      .append(thumbnailCouponDiv
        .append(captionDiv
          .append(categoryName)
          .append(couponTitle)
          .append(merchantName)
          .append(merchantLocality)
          .append(merchantRegion)
          .append(couponImage)
          )
        )
      );
  }); 

}); 

 }); //end button click
}); //ends document ready





