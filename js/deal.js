
$(document).ready(function() {




// $('#blue').on("click", function(){
//   $('#modal').modal('show');
// });

 var curr_pos = function(pos){
  var lat = pos.coords.latitude,
      long = pos.coords.longitude,
      coords = lat + ' ,' + long;
  $('#google_map').attr('src','https://maps.google.com?q='+
  coords +'&z=60&output=embed');   
  console.log(lat);
  console.log(long);
  };

  $('#get_location').on('click', function(){
  navigator.geolocation.getCurrentPosition(curr_pos);
  return false;
});


$("#userLocation").keyup(function(event){
    if(event.keyCode == 13){
        $("#locationBtn").click();
    }
});


 $("#locationBtn").click(function (e) {

  $("#dealsRow").empty();
  $("#couponsRow").empty();

  e.preventDefault();

  var userLocation = $("#userLocation").val().trim();

  var sqootDealAPI = "https://api.sqoot.com/v2/deals?api_key=fflt53&location=?";
  sqootDealAPI += userLocation;

  $.getJSON(sqootDealAPI, {
    action: "query.location",
    list: "search",
    format: "json"
  }, 

  function (data) {


    console.log(data);

    $.each(data.deals, function buildDealThumbnail (i, item) {

      var api_key = "fflt53";
      var dealId = data.deals[i].deal.id;
      var categoryName = $("<p>").append(data.deals[i].deal.category_name);
      var dealTitle = $("<p>").append(data.deals[i].deal.title);
      var merchantName = $("<p>").append(data.deals[i].deal.merchant.name);
      var merchantLocality = $("<p>").append(data.deals[i].deal.merchant.locality);
      var merchantRegion = $("<p>").append(data.deals[i].deal.merchant.region);
      var dealImage =$("<img>").attr("src", data.deals[i].deal.image_url).addClass("img-thumbnail");

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

    (function($) {
    var infoModal = $('#myModal');
    $('.thumbnail').on('click', function(){
        $.ajax({ 
          type: "GET", 
          url: 'http://api.sqoot.com/v2/deals/'+$(this).data('deals[i].deal.id'),
          dataType: 'json',
          success: function(data){ 
            htmlData = '<ul><li>title: '+data.deals[i].deal.category_name+'</li><li>age: '+data.deals[i].deal.title+'</li></ul>';
            infoModal.find('.modal-body').html(htmlData);
            modal.modal('show');
          }
        });

        return false;
    });
})(jQuery);

      });

    });   

var userLocation = $("#userLocation").val().trim();

var sqootCouponAPI = "https://api.sqoot.com/v2/coupons?api_key=fflt53&location=?";
sqootCouponAPI += userLocation;


$.getJSON(sqootCouponAPI, {
  action: "query.location",
  list: "search",
  format: "json"
}, 

function (data) {
  console.log(data);

  $.each(data.coupons, function buildCouponThumbnail (i, item) {

    var api_key = "fflt53";
    var couponId = data.coupons[i].coupon.id;
    var categoryName = $("<p>").append(data.coupons[i].coupon.category_name);
    var couponTitle = $("<p>").append(data.coupons[i].coupon.title);
    var merchantName = $("<p>").append(data.coupons[i].coupon.merchants[0].merchant.name);
    var merchantLocality = $("<p>").append(data.coupons[i].coupon.merchants[0].merchant.locality);
    var merchantRegion = $("<p>").append(data.coupons[i].coupon.merchants[0].merchant.region);
    var couponImage = $("<img>").attr("src", data.coupons[i].coupon.image_url).addClass("img-thumbnail");

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
