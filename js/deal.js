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
  success:function(feed) {
   console.log(feed);
  },
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

});


});