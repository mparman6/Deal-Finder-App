// alert("hi");

  // var c = function(pos){
  //     var lat = pos.coords.latitude,
  //         long = pos.coords.longitude,
  //         coords = lat + ' ,' + long;
  //     document.getElementById('google_map').setAttribute('src','https://maps.google.co.uk?q='+
  //     coords +'&z=60&output=embed');   
  //     };

  //   document.getElementById('get_location').onclick= function(){
  //     navigator.geolocation.getCurrentPosition(c);
  //     return false;
  //   };
$(document).ready(function(){

    $('#blue').on("click", function(){
    $('#modal').modal('show');
    });

     var curr_pos = function(pos){
      var lat = pos.coords.latitude,
          long = pos.coords.longitude,
          coords = lat + ' ,' + long;
      $('#google_map').attr('src','https://maps.google.com?q='+
      coords +'&z=60&output=embed');   
      };

      $('#get_location').on('click', function(){
      navigator.geolocation.getCurrentPosition(curr_pos);
      return false;
    });



});
   