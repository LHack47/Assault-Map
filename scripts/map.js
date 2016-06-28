//Firebase link
var firebaseRef = new Firebase("https://mapmain.firebaseio.com/");

 //Helper function for reverse geocoding
function getReverseGeocodingData() {
    var latlng = userObject.userLocation;
    // This is making the Geocode request
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'latLng': latlng }, function (results, status) {
        if (status !== google.maps.GeocoderStatus.OK) {
            alert(status);
        }
        // This is checking to see if the Geoeode Status is OK before proceeding
        if (status == google.maps.GeocoderStatus.OK) {
            //console.log(results);
            userObject.attackLocation = (results[0].formatted_address);
        }
      });
}
  
/* SEND OBJECT TO FIREBASE */
  var post = function(){
    firebaseRef.push(userObject);
    //reset object
    userObject = {};
    document.getElementById("resetForm").reset();
  } //post function()
  
 //Helper Functions to Fade In DOM elements
 function fadeThisIn(element){
      element.fadeIn("fast");
    };
 function fadeThisOut(element){
      element.fadeOut("fast");
    };

var userObject = {};
/* SEND OBJECT TO FIREBASE */


    function geocodeThis(){
      var geocoder = new google.maps.Geocoder;
      var latLng = userObject.userLocation;
        geocoder.geocode({'location': latLng}, function(results, status) {
          if (status === google.maps.GeocoderStatus.OK) {
              userObject.address = results[0].formatted_address;
            } else {
              console.log('No results found');
          }
        });
      }; //geocodeThis()

      function fadeThisIn(element){
      element.fadeIn("fast");
    };
    function fadeThisOut(element){
      element.fadeOut("fast");
    };
/* SEARCH BOX + MAP*/
 function initAutocomplete() {
    var map = new google.maps.Map(document.getElementById('googleMap'), {
      center: {lat: 37.734972, lng: -122.431297},
      zoom: 12,
      styles: [{"featureType":"all","elementType":"labels","stylers":[{"lightness":63},{"hue":"#ff0000"}]},{"featureType":"administrative","elementType":"all","stylers":[{"hue":"#000bff"},{"visibility":"on"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"administrative","elementType":"labels","stylers":[{"color":"#4a4a4a"},{"visibility":"on"}]},{"featureType":"administrative","elementType":"labels.text","stylers":[{"weight":"0.01"},{"color":"#727272"},{"visibility":"on"}]},{"featureType":"administrative.country","elementType":"labels","stylers":[{"color":"#ff0000"}]},{"featureType":"administrative.country","elementType":"labels.text","stylers":[{"color":"#ff0000"}]},{"featureType":"administrative.province","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"administrative.province","elementType":"labels.text","stylers":[{"color":"#545454"}]},{"featureType":"administrative.locality","elementType":"labels.text","stylers":[{"visibility":"on"},{"color":"#737373"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text","stylers":[{"color":"#7c7c7c"},{"weight":"0.01"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text","stylers":[{"color":"#404040"}]},{"featureType":"landscape","elementType":"all","stylers":[{"lightness":16},{"hue":"#ff001a"},{"saturation":-61}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"color":"#828282"},{"weight":"0.01"}]},{"featureType":"poi.government","elementType":"labels.text","stylers":[{"color":"#4c4c4c"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"hue":"#00ff91"}]},{"featureType":"poi.park","elementType":"labels.text","stylers":[{"color":"#7b7b7b"}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.text","stylers":[{"color":"#999999"},{"visibility":"on"},{"weight":"0.01"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"hue":"#ff0011"},{"lightness":53}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"color":"#626262"}]},{"featureType":"transit","elementType":"labels.text","stylers":[{"color":"#676767"},{"weight":"0.01"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#0055ff"}]}],
          mapTypeControl: true,
          mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.RIGHT_BOTTOM
           },
          zoomControl: true,
          zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER
          },
           streetViewControl: false
    }); //styles

    // Create the search box and link it to the UI element.
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  // Bias the SearchBox results towards current map's viewport.
   var questionWindow = new google.maps.InfoWindow;
    map.addListener('bounds_changed', function() {
      searchBox.setBounds(map.getBounds());
    });
    // Listen for the event fired when the user selects a prediction and retrieve more details for that place.
    searchBox.addListener('places_changed', function() {
      var places = searchBox.getPlaces();

      if (places.length == 0) {
        return;
      }
      // For each place, get the icon, name and location.
      var bounds = new google.maps.LatLngBounds();
      places.forEach(function(place) {

        // Create a marker for each place.
        var marker = new google.maps.Marker({
          position: place.geometry.location,
          map: map,
        });

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }

        //question-window open
      questionWindow.setContent( "<div id='pinDrop-window'>" +
      "<h3>Report a sexual assault at this location?</h3>"+
     "<button type='button' class='btn btn-default btn-clicked' id='fireBase-no'>No</button>"+
      "<button type='button' class='btn btn-default btn-clicked' id='fireBase-yes'>Yes</button>" +
      "</div>"); // #pinDrop-window 
        questionWindow.open(map, marker);
        if(infoWindow.open()){
          infoWindow.close();
        }
        //To hide the X in the info marker
        $(".gm-style-iw").next("div").hide();
  // SEND TO FIREBASE
      $("#pinDrop-window > #fireBase-yes").on("click", function(e){
        userObject.userLocation = {lat: place.geometry.location.lat(), lng: place.geometry.location.lng()};
        geocodeThis();
        fadeThisOut($("#pinDrop-window"));
        fadeThisIn($("#form-start-overlay"));
        questionWindow.close();
      });
      $("#pinDrop-window > #fireBase-no").on("click", function(){
        questionWindow.close();
        //REMOVE MARKER IF USER SELECTS NO
        marker.setVisible(false);
      });
    }); //place.forEach
    map.fitBounds(bounds);
    }); //searchBox.addListener

     // Add marker on user click
  map.addListener('click', function(e) {
    var marker = new google.maps.Marker({
    position: {lat: e.latLng.lat(), lng: e.latLng.lng()},
    map: map
    }); // var marker

     //info box when you click map
    questionWindow.setContent( 
      "<div id='pinDrop-window'>" +
      "<h3>Report a sexual assault at this location?  </h3>"+
      "<button type='button' class='btn btn-default btn-clicked' id='fireBase-no'>No</button>"+
      "<button type='button' class='btn btn-default btn-clicked' id='fireBase-yes'>Yes</button>" +
      "</div>"); // #pinDrop-window 

   //Call by:: questionWindow.open(map, marker);
      questionWindow.open(map, marker);
        if(infoWindow.open()){
          infoWindow.close();
        }
      $(".gm-style-iw").next("div").hide();
 //ADD PINDROP OVERLAY 
      $("#pinDrop-window > #fireBase-yes").on("click", function(){
       userObject.userLocation = {lat: e.latLng.lat(), lng: e.latLng.lng()};
       geocodeThis();
        fadeThisOut($("#pinDrop-window"));
        fadeThisIn($("#form-start-overlay"));
        questionWindow.close();
      });
      $("#pinDrop-window > #fireBase-no").on("click", function(){
        questionWindow.close();
        marker.setVisible(false);
      });
    }); //map.addListener


var infoWindow = new google.maps.InfoWindow();

//DROP A MARKER WHEN MAP IS CLICKED 
  firebaseRef.on("child_added", function(snapshot, prevChildKey) {
    // Get latitude and longitude from the cloud.
    var eventObject = snapshot.val();
    // Create a google.maps.LatLng object for the position of the marker.
    var latLng = new google.maps.LatLng(eventObject.userLocation.lat, eventObject.userLocation.lng);
    // Place a marker at that location.
    var marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
  //info box when you click a pin
// TODO: TAKE OUT CALL BACK FUNCTION AND PUT INSIDE A CLICK HANDLER FUNCTION!
    google.maps.event.addListener(marker, 'click', function() {
      // infoWindow.close();
      infoWindow.setContent(
       '<div id="infoContent">'+
       '<h3>' + ' ' +
       '</h3>' +
       '<p><strong> Location of event: </strong>'+ eventObject.address + "<br> <strong>Gender of Survivor: </strong>" + 
       eventObject.userGender + ' <br> <strong> Age of Survivor </strong>' + 
       eventObject.userAge +' <br> <strong> Event Date/Range: </strong>'+
       eventObject.dateStart + '-'+ eventObject.dateEnd + "<br> <strong> Number of Attackers: </strong>'" + 
       eventObject.attackedBy + ' <br> <strong> Gender of Attacker: </strong>' + eventObject.attackerGender + 
      '<br> <strong> Survivor Relationship to Attacker: </strong>' + 
      eventObject.attackerRelationship + ' <br> <strong> On a School Campus: </strong>' +
      eventObject.schoolCampus + ' <br> <strong>Assault Reported:</strong>' + eventObject.reported + '<br>' +
    
        '</p></div>'
      );
      infoWindow.open(map, marker);
        if(questionWindow.open()){
          questionWindow.close();
          marker.setVisible(false);
        }
    }); // addListender(marker)
  }); //firebase.on function
} //initAutocomplete()

