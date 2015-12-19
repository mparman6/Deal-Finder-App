$(document).ready(function(){


 var sqootAPI = "http://api.sqoot.com/v2/deals?api_key=fflt53&callback=?";
 var sqootKEY = "fflt53";


 $.ajax ({
  type:'GET',
  url: sqootAPI,
  data: 'format=json&id=123',
  success:function(feed) {
   console.log(feed);
  },
  dataType: 'jsonp'
 });




 // fflt53

});