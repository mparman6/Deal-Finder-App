
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



 $("button").click(function (e) {

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
      var infoBtn = $("<button>").attr("type", "button").addClass("btn btn-info dealBtn");

      var dealModal = $("<div>").attr({id: "dealModal", tabindex: "-1",role: "dialog"}).addClass("modal fade");
      var modalDialog = $("<div>").addClass("modal-dialog");
      var modalContent = $("<div>").addClass("modal-content");
      var modalHeader = $("<div>").addClass("modal-header");
      var span = $("<span>").attr("aria-hidden", "true");
      var closeModalBtn = $("<button>").addClass("close").attr("data-dismiss", "modal").attr("aria-label", "Close").append(span);
      var modalTitle = $("<h4>").addClass("modal-title");
      var modalBody = $("<div>").addClass("modal-body");
      var modalContent = $("<div>").addClass("modal-content"); 
      var modalFooter = $("<div>").addClass("modal-footer");
      var closeModalBtnFooter = $("<button>").addClass("btn btn-default").attr("data-dismiss", "modal");
      var saveModalBtnFooter = $("<button>").addClass("btn btn-primary");



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
          .append(infoBtn)
          )
        );


      $(".dealBtn").click (function () {

        $("#dealModal").append(modalDialog
          .append (modalContent
            .append(modalHeader
              .append (closeModalBtn
                )
              .append(modalBody)
              .append(modalFooter
                .append(closeModalBtnFooter)
                .append(saveModalBtnFooter)
                )
              )
            )
            ); 

          $("#dealModal").modal("show");
        });


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
    var infoBtn = $("<button>").attr("type", "button").addClass("btn btn-info couponBtn");

    var couponModal = $("<div>").attr({id: "Modal", tabindex: "-1",role: "dialog"}).addClass("modal fade")
    var modalDialog = $("<div>").addClass("modal-dialog");
    var modalContent = $("<div>").addClass("modal-content");
    var modalHeader = $("<div>").addClass("modal-header");
    var span = $("<span>").attr("aria-hidden", "true");
    var closeModalBtn = $("<button>").addClass("close").attr("data-dismiss", "modal").attr("aria-label", "Close").append(span);
    var modalTitle = $("<h4>").addClass("modal-title");
    var modalBody = $("<div>").addClass("modal-body");
    var modalContent = $("<div>").addClass("modal-content"); 
    var modalFooter = $("<div>").addClass("modal-footer");
    var closeModalBtnFooter = $("<button>").addClass("btn btn-default").attr("data-dismiss", "modal");
    var saveModalBtnFooter = $("<button>").addClass("btn btn-primary");

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
        .append(infoBtn)
        )
      );


    $(".couponBtn").click (function () {

        $("#couponModal").append(modalDialog
          .append (modalContent
            .append(modalHeader
              .append (closeModalBtn
                )
              .append(modalBody)
              .append(modalFooter
                .append(closeModalBtnFooter)
                .append(saveModalBtnFooter)
                )
              )
            )
            ); 

          $("#couponModal").modal("show");
        });




   }); 

  }); 

 }); //end button click

}); //ends document ready
