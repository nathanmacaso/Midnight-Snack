function initMap(){var e=new google.maps.StyledMapType([{featureType:"water",stylers:[{color:"#19a0d8"}]},{featureType:"administrative",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"},{weight:6}]},{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#e85113"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#efe9e4"},{lightness:-40}]},{featureType:"road.arterial",elementType:"geometry.stroke",stylers:[{color:"#efe9e4"},{lightness:-20}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{lightness:100}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{lightness:-100}]},{featureType:"road.highway",elementType:"labels.icon"},{featureType:"landscape",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"landscape",stylers:[{lightness:20},{color:"#efe9e4"}]},{featureType:"landscape.man_made",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{lightness:100}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{lightness:-100}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{hue:"#11ff00"}]},{featureType:"poi",elementType:"labels.text.stroke",stylers:[{lightness:100}]},{featureType:"poi",elementType:"labels.icon",stylers:[{hue:"#4cff00"},{saturation:58}]},{featureType:"poi",elementType:"geometry",stylers:[{visibility:"on"},{color:"#f0e4d3"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#efe9e4"},{lightness:-25}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#efe9e4"},{lightness:-10}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"simplified"}]}],{name:"Styled Map"}),t={lat:41.8789,lng:-87.6359};map=new google.maps.Map(document.getElementById("map"),{center:t,zoom:15}),map.mapTypes.set("styled_map",e),map.setMapTypeId("styled_map"),infoWindow=new google.maps.InfoWindow,navigator.geolocation?navigator.geolocation.getCurrentPosition(function(e){var t={lat:e.coords.latitude,lng:e.coords.longitude},a=new google.maps.places.PlacesService(map);a.nearbySearch({location:t,radius:1600,openNow:!0,type:["grocery_or_supermarket"]},callback),map.setCenter(t)},function(){handleLocationError(!0,infoWindow,map.getCenter())}):handleLocationError(!1,infoWindow,map.getCenter())}function callback(e,t){if(t===google.maps.places.PlacesServiceStatus.OK)for(var a=0;a<e.length;a++)createMarker(e[a])}function createMarker(e){var t=(e.geometry.location,"/assets/grocery-marker-09b4351fab35809d7f07c8f531608e2d02281e2da28492dd291fa79f0c6053ca.png"),a=new google.maps.Marker({map:map,position:e.geometry.location,icon:t});google.maps.event.addListener(a,"click",function(){infoWindow.setContent(e.name),infoWindow.open(map,this)})}function handleLocationError(e,t,a){t.setPosition(a),t.setContent(e?"Error: The Geolocation service failed.":"Error: Your browser doesn't support geolocation.")}var map,infoWindow;