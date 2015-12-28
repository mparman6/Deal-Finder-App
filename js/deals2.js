

$(document).ready(function() {


 $("button").click(function (e) {

  e.preventDefault();

  var userLocation = $("#userLocation").val().trim();

  $.getJSON("http://api.sqoot.com/v2/deals?api_key=fflt53&callback=?", {
    action: "query",
    list: "search",
    format: "json"
  }, 

  function (data) {

    $("#dealsRow").empty();

   $.each(data.deals, function buildDealThumbnail (i, item) {

    var api_key = "fflt53";
    var categoryName = $("<p>").append(data.deals[i].deal.category_name);
    var dealTitle = $("<p>").append(data.deals[i].deal.title);
    var merchantName = $("<p>").append(data.deals[i].deal.merchant.name);
    var merchantLocality = $("<p>").append(data.deals[i].deal.merchant.locality);
    var merchantRegion = $("<p>").append(data.deals[i].deal.merchant.region);
    var dealImageParam = data.deals[i].deal.image_url;

    var colDealDiv = $("<div>").attr("id", "colDealDiv").addClass("row col-md-8 col-md-offset-2");
    var thumbnailDealDiv = $("<div>").addClass("thumbnail");
    var dealImage = $("<img>").attr("src", dealImage);
    var captionDiv = $("<div>").addClass("caption");

   });

  });   


$.getJSON("http://api.sqoot.com/v2/coupons?api_key=fflt53&callback=?", {
    action: "query",
    list: "search",
    format: "json"
  }, 

  function (data) {
    console.log(data);

    $("#couponsRow").empty();

   $.each(data.coupons, function buildCouponThumbnail (i, item) {

    var api_key = "fflt53";
    var categoryName = data.coupons[i].coupon.category_name;
    var couponTitle = data.coupons[i].coupon.title;
    var merchantName = data.coupons[i].coupon.merchants[0].merchant.name;
    var merchantLocality = data.coupons[i].coupon.merchants[0].merchant.locality;
    var merchantRegion = data.coupons[i].coupon.merchants[0].merchant.region;
    var couponImage = data.coupons[i].coupon.image_url;

    $("<div>").attr("id", "colCouponDiv").addClass("row col-md-8 col-md-offset-2")
      .appendTo("body");
    $("<div>").attr("id", "thumbnailCouponDiv").addClass("thumbnail")
      .appendTo("#colCouponDiv");
    $("<div>").attr("id", "captionDiv").addClass("caption")
      .appendTo("#thumbnailCouponDiv");
    $("<p>").append(categoryName)
      .appendTo("#thumbnailCouponDiv");
    $("<p>").append(couponTitle)
      .appendTo("#thumbnailCouponDiv");
    $("<p>").append(merchantName)
      .appendTo("#thumbnailCouponDiv");
    $("<p>").append(merchantLocality)
      .append(" ")
      .append(merchantRegion)
      .appendTo("#thumbnailCouponDiv");
    $("<img>").attr("src", couponImage)
      .appendTo("#thumbnailCouponDiv");


   }); 

  }); 

 }); //end button click
}); //ends document ready

