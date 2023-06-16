/*
 * schulen.js
 * Started on Montag, 25 September 2017.
 */

// the google maps object
var map = undefined;
var picker = undefined;

function initMainMap() {

    var centerLat = parseFloat(south) + ( parseFloat(north) - parseFloat(south) ) / 2.0;
    var centerLng = parseFloat(west) + (parseFloat(east) - parseFloat(west)) / 2.0 ;

    console.log("Initializing google maps map with center");
    console.log(centerLat);
    console.log(centerLng);

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: { lat: centerLat,
                  lng: centerLng}
    });

    picker = new google.maps.Map(document.getElementById('coordPicker'), {
        zoom: 11,
        center: { lat: centerLat,
                  lng: centerLng}
    });

    google.maps.event.addListener(picker, "click", function(ev) {
        newSchool.lat = ev.latLng['lat'];
        newSchool.lng = ev.latLng['lng'];
        alert(JSON.stringify(ev.latLng));
    });

 // var circle = new google.maps.Circle({
 //            strokeColor: '#0000FF',
 //            strokeOpacity: 0.8,
 //            strokeWeight: 1,
 //            fillColor: '#000066',
 //            fillOpacity: 0.05,
 //            map: map,
 //            center: { lat: 50.840496,
 //                  lng: 6.116714},
 //            radius: 6000
 //          });
    
    locations.forEach( function(loc) {
        var newPos = new google.maps.LatLng({'lat': parseFloat(loc['lat']), 'lng': parseFloat(loc['lng'])});
        var marker = undefined;
        if (loc['typ'] == 'gymnasium') {
            marker = new google.maps.Marker({
                position: newPos,
                title: loc['name'],
                map: map,
                icon: 'icons/map-marker_blue.png'
            });
        } else {
            marker = new google.maps.Marker({
                position: newPos,
                title: loc['name'],
                map: map,
                icon: 'icons/map-marker_green.png'
            });
        }
        marker.addListener('click', function() {
            window.open(loc['url'], "Gymnasium", undefined, true);
        });
    });


    var icons = {
        gs: {
            name: 'Gesamtschule',
            icon: 'icons/map-marker_green.png'
        },
        gymnasium: {
            name: 'Gymnasium',
            icon: 'icons/map-marker_blue.png'
        }
    };

    var legend = document.getElementById('legend');
    for (var key in icons) {
        var type = icons[key];
        var name = type.name;
        var icon = type.icon;
        var div = document.createElement('div');
        div.innerHTML = '<img src="' + icon + '"> ' + name;
        legend.appendChild(div);
    }

    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);

}

// variables north, east, south, west should be defined from locations.js

window.onresize = function(event) {
    if (map) {

        var centerLat = parseFloat(south) + ( parseFloat(north) - parseFloat(south) ) / 2.0;
        var centerLng = parseFloat(west) + (parseFloat(east) - parseFloat(west)) / 2.0 ;

        map.setCenter({ lat: centerLat,
                        lng: centerLng});
    }
}

