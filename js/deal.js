

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

   $.each(data.deals, function (i, item) {
    $("<div>").attr("id", "colDealDiv").addClass("row col-md-8 col-md-offset-2")
      .appendTo("body");
    $("<div>").attr("id", "thumbnailDealDiv").addClass("thumbnail")
      .appendTo("#colDealDiv");
    $("<div>").attr("id", "captionDiv").addClass("caption")
      .appendTo("#thumbnailDealDiv");
    $("<p>").append(data.deals[i].deal.category_name)
      .appendTo("#thumbnailDealDiv");
    $("<p>").append(data.deals[i].deal.title)
      .appendTo("#thumbnailDealDiv");
    $("<p>").append(data.deals[i].deal.merchant.name)
      .appendTo("#thumbnailDealDiv");
    $("<p>").append(data.deals[i].deal.merchant.locality)
      .append(" ")
      .append(data.deals[i].deal.merchant.region)
      .appendTo("#thumbnailDealDiv");
    $("<p>").append(data.query.location)
      .appendTo("#thumbnailDealDiv");
    $("<img>").attr("src", data.deals[i].deal.image_url)
      .appendTo("#thumbnailDealDiv");

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

   $.each(data.coupons, function (i, item) {
    $("<div>").attr("id", "colCouponDiv").addClass("row col-md-8 col-md-offset-2")
      .appendTo("body");
    $("<div>").attr("id", "thumbnailCouponDiv").addClass("thumbnail")
      .appendTo("#colCouponDiv");
    $("<div>").attr("id", "captionDiv").addClass("caption")
      .appendTo("#thumbnailCouponDiv");
    $("<p>").append(data.coupons[i].coupon.category_name)
      .appendTo("#thumbnailCouponDiv");
    $("<p>").append(data.coupons[i].coupon.title)
      .appendTo("#thumbnailCouponDiv");
    $("<p>").append(data.coupons[i].coupon.merchants[0].merchant.name)
      .appendTo("#thumbnailCouponDiv");
    $("<p>").append(data.coupons[i].coupon.merchants[0].merchant.locality)
      .append(" ")
      .append(data.coupons[i].coupon.merchants[0].merchant.region)
      .appendTo("#thumbnailCouponDiv");
    $("<p>").append(data.query.location)
      .appendTo("#thumbnailCouponDiv");
    $("<img>").attr("src", data.coupons[i].coupon.image_url)
      .appendTo("#thumbnailCouponDiv");

   }); 



  }); 

 });
});


