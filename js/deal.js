

$(document).ready(function() {

 $("button").click(function (e) {

  e.preventDefault();


  $.getJSON("http://api.sqoot.com/v2/deals?api_key=fflt53&callback=?", function (data) {
   console.log(data);
   $.each(data.deals, function (i, item) {
    $("<div>").attr("id", "colDealDiv").addClass("col-md-4")
      .appendTo("#dealsRow");
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
      .append(", ")
      .append(data.deals[i].deal.merchant.region)
      .appendTo("#thumbnailDealDiv");
    $("<p>").append(data.query.location)
      .appendTo("#thumbnailDealDiv");
    $("<img>").attr("src", data.deals[i].deal.image_url)
      .appendTo("#thumbnailDealDiv");
   });                      
  }); 

 });
});


