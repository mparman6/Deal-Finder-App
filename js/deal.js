$(document).ready(function() {


 var sqootAPIdeals = "http://api.sqoot.com/v2/deals?api_key=fflt53&callback=?";
 var sqootAPIcoupons = "http://api.sqoot.com/v2/coupons?api_key=fflt53&callback=?";
 var userZipcode;

$("#locationBtn").on("click", function() {
 
 userZipcode = $("#userZipcode").val().trim();

 console.log(userZipcode);
 $.ajax ({
  type:'GET',
  url: sqootAPIdeals,
  data: 'format=json&id=123',
  success:,
  dataType: 'jsonp'
 }); 

 $.ajax ({
  type:'GET',
  url: sqootAPIcoupons,
  data: 'format=json&id=123',
  success:function(feed) {
   console.log(feed);
  },
  dataType: 'jsonp'
 });

 buildDealsRow();

});

function buildDealsRow (query) {
 var colDiv = $("<div>").addClass("col-md-4");
 var thumbnailDiv = $("<div>").addClass("thumbnail");
 var captionDiv = $("<div>").addClass("caption");
 var thumbTitle = $("<p>").append(deals.deal.title);

 colDiv.append(thumbnailDiv.
  append(captionDiv.
    append(thumbTitle)));

 return colDiv;
}

function buildCouponsRow () {

}

});