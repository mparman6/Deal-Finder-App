$(document).ready(function() {

{{window.CodiqaControls && window.CodiqaControls.register('googlemaps', 'googlemapsjs1', {
  ready: function(control) {

      control.options = {
          zoom: 14,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      control.el = document.getElementById(control._id);
      control.map = new google.maps.Map(control.el, control.options);

      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({
          'address': 'Madison, WI'
      }, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {

              var marker = new google.maps.Marker({
                  map: control.map,
                  position: results[0].geometry.location
              });
              control.center = results[0].geometry.location;
              control.map.setCenter(control.center);
          }
      });

  }
});
}}
});