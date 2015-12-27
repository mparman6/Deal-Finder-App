

$(document).ready(function() {

 $("button").click(function (e) {

  e.preventDefault();


  $.getJSON("http://api.sqoot.com/v2/deals?api_key=fflt53&callback=?", function (data) {
   console.log(data);
   $.each(data.deals, function (i, item) {
    $("<img>").attr("src", data.deals[i].deal.image_url).appendTo("#dealsRow");
   });                      
  }); 

});
});