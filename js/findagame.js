$(function() {
	  $('nav ul').slicknav({prependTo: 'header'});
    $('nav ul').toggle();
    return false;
	});


if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(locateSuccess, locateFail);
}

function locateSuccess(loc) {
  var latitude = loc.coords.latitude;
  var longitude = loc.coords.longitude;
  var coords = new google.maps.LatLng(latitude, longitude);

  //create two fake pickup game locations, near to the user's current location:
  var fakegame1_coords = new google.maps.LatLng(latitude + (Math.random()/100), longitude - (Math.random()/100));
  var fakegame2_coords = new google.maps.LatLng(latitude - (Math.random()/100), longitude + (Math.random()/100));

  //set options for the Google Map:
  var options = {
    zoom: 8,
    center: coords,
    mapTypeId: google.maps.MapTypeId.HYBRID
  };

  //create the Google Map:
  var map =
      new google.maps.Map(document.getElementById("mapcontainer"), options);

  //create display text for the map popup window and the popup window
  var infoWindowText = "<p>You are at "+latitude+","+longitude+"</p>";
  var infowindow = new google.maps.InfoWindow({
    content: infoWindowText
  });

  //create a marker for the user's current position
  var marker = new google.maps.Marker({
    position: coords,
    map: map
  });

  //create markers for the two games
  var fakegame1_marker = new google.maps.Marker({
    position: fakegame1_coords,
    map: map
  });
  var fakegame2_marker = new google.maps.Marker({
    position: fakegame2_coords,
    map: map
  });

  //enable clicking on the current-location marker
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });

  //popup the current-location window when the page loads
  google.maps.event.trigger(marker, 'click');

}
function locateFail(geoPositionError) {
  alert('An unknown error occurred, sorry');
}
