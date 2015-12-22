$(document).ready(function() {

  $("#locationBtn").on("click", function(e) {

    e.preventDefault();

    var userZipcode = $("#userZipcode").val().trim();
    var sqootAPIdeals = "http://api.sqoot.com/v2/deals?api_key=fflt53&callback=?";
    var sqootAPIcoupons = "http://api.sqoot.com/v2/coupons?api_key=fflt53&callback=?";


    $.getJSON(sqootAPIdeals, function(deals_feed){
      $("#dealsRow").html(query.location.address);
      console.log(deals_feed);
    });


    });

  });

