import React, {Component} from 'react';
import List from './List';
import heart from './icons/heart2.png';
import violet from './icons/violet.jpg';
import eric from './icons/eric.jpg';

class App extends Component {
   //Constructor
  
    constructor(props) {
        super(props);
        this.state = {
            'ourLocations': [
                {
                    'name': "Eric's House",
                    'type': "Pet Store",
                    'latitude': 33.787914,
                    'longitude': -117.853104,
                    'streetAddress': "Orange County, CA",
                  significance: "Where he lives"
                },
                {
                    'name': "Violet's House",
                    'type': "Place of Worship",
                    'latitude': 40.273502,
                    'longitude': -86.126976,
                    'streetAddress': "Indiana",
                  significance: "Where I live"
                },
                {
                    'name': "The Signature Room at the 95th®",
                    'type': "Restaurant",
                    'latitude': 41.898883,
                    'longitude': -87.62315030000002,
                    'streetAddress': "875 N Michigan Ave, Chicago, IL 60611",
                  significance: "First time meeting"
                },
                {
                    'name': "Grand Canyon",
                    'type': "natural feature",
                    'latitude': 36.0908125,
                    'longitude': -112.11656249999999,
                    'streetAddress': "20 S Entrance Rd, Grand Canyon Village, AZ 86023",
                  significance: "First big trip together"
                },
                {
                    'name': "Hannah Haunted Acres",
                    'type': "locality",
                    'latitude': 39.705740, 
                    'longitude': -86.037355,
                    'streetAddress': "7323 E Hanna Ave, Indianapolis, IN 46239",
                  	significance: "Halloween visit.  First time coming to indiana?"
                },
                {
                    'name': "Huntington Beach",
                    'type': "natural feature",
                    'latitude': 33.637969,
                    'longitude':  -117.972901,
                    'streetAddress': "21601 Pacific Coast Hwy, Huntington Beach, CA 92646",
                  	significance: "First Valentine's date"
                }
            ],
            'map': '',
            'infowindow': '',
            'prevmarker': ''
        };

        // retain object instance when used in the function
        this.initMap = this.initMap.bind(this);
        this.openInfoWindow = this.openInfoWindow.bind(this);
        this.closeInfoWindow = this.closeInfoWindow.bind(this);
    }

    componentDidMount() {
        // Connect the initMap() function within this class to the global window context,
        // so Google Maps can invoke it
        window.initMap = this.initMap;
        // Asynchronously load the Google Maps script, passing in the callback reference
        loadMapJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyCJUMGjtJYhRN_r_B9e0VM455rRE8_iAec&callback=initMap')
    }

    
     // Initialise the map once the google map script is loaded
     
    initMap() {
        let self = this;
      	let styles =   [
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "hue": "#ff00d8"
            },
            {
                "saturation": "0"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#f9b8ea"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels",
        "stylers": [
            {
                "color": "#ff0000"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#4e113b"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "color": "#ca2992"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#2e093b"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#9e1010"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ff0000"
            }
        ]
    },
    {
        "featureType": "landscape.natural.landcover",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#58176e"
            }
        ]
    },
    {
        "featureType": "landscape.natural.landcover",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#a02aca"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#d180ee"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#a02aca"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "color": "#ff0000"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#a02aca"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#cc81e7"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "hue": "#f200ff"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#882375"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#e36cd9"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#b7918f"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#280b33"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#ca2994"
            }
        ]
    }
]

        let mapview = document.getElementById('map');
        mapview.style.height = window.innerHeight + "px";
        let map = new window.google.maps.Map(mapview, {
            center: {lat: 38.961914, lng:-101.004839},
            zoom: 5,
            mapTypeControl: false,
          styles:styles
        });

        let InfoWindow = new window.google.maps.InfoWindow({});

        window.google.maps.event.addListener(InfoWindow, 'closeclick', function () {
            self.closeInfoWindow();
        });

        this.setState({
            'map': map,
            'infowindow': InfoWindow
        });

        window.google.maps.event.addDomListener(window, "resize", function () {
            let center = map.getCenter();
            window.google.maps.event.trigger(map, "resize");
            self.state.map.setCenter(center);
        });

        window.google.maps.event.addListener(map, 'click', function () {
            self.closeInfoWindow();
        });

        let ourLocations = [];
        this.state.ourLocations.forEach(function (location) {
            let longName = location.name + ' - ' + location.type;
            let marker = new window.google.maps.Marker({
                position: new window.google.maps.LatLng(location.latitude, location.longitude),
                animation: window.google.maps.Animation.BOUNCE,
                map: map,
                title: location.significance,
              	icon: heart
            });

            marker.addListener('click', function () {
                self.openInfoWindow(marker, longName);
            });

            location.longName = longName;
            location.marker = marker;
            location.display = true;
            ourLocations.push(location);
        });
        this.setState({
            'ourLocations': ourLocations
        });
    }

    // Open the infowindow for the marker

    openInfoWindow(marker, longName) {
        this.closeInfoWindow();
        this.state.infowindow.open(this.state.map, marker);
        marker.setAnimation(window.google.maps.Animation.BOUNCE);
        this.setState({
            'prevmarker': marker
        });
        this.state.infowindow.setContent('Loading Data...');
        this.state.map.setCenter(marker.getPosition());
        this.state.map.panBy(0, -150);
      if(longName.includes("Eric"))
      {
        this.getOurBF4MarkerInfo(marker, longName, 'Diabeeeeeeeeetus');
      }
     if (longName.includes("Violet"))
      {
        this.getOurBF4MarkerInfo(marker, longName, 'djbobbysocks');
      }
      else{
        this.getMarkerInfo(marker, longName);
      }
    }

    //set infowwindow
   
    getMarkerInfo(marker,longName) {
        let self = this;
      let windowText = longName+ '<br> '+ marker.title
       self.state.infowindow.setContent(windowText);
               
    }
 secondsToString(seconds)
{
  let numdays = Math.floor(seconds / 86400);
  let numhours = Math.floor((seconds % 86400) / 3600);
  let numminutes = Math.floor(((seconds % 86400) % 3600) / 60);
  let numseconds = ((seconds % 86400) % 3600) % 60;
  return numdays + " days " + numhours + " hours " + numminutes + " minutes " + numseconds + " seconds";

}
 getOurBF4MarkerInfo(marker, longName, playerName) {
        var self = this;
        var url = "https://api.bf4stats.com/api/playerInfo?plat=pc&name="+playerName+"&output=json";
        fetch(url)
            .then(
                function (response) {
                    if (response.status !== 200) {
                        self.state.infowindow.setContent("Sorry data can't be loaded");
                        return;
                    }

                    // Examine the text in the response
                    response.json().then(function (data) {
                       function secondsToString(seconds)
                        {
                          let numdays = Math.floor(seconds / 86400);
                          let numhours = Math.floor((seconds % 86400) / 3600);
                          let numminutes = Math.floor(((seconds % 86400) % 3600) / 60);
                          let numseconds = ((seconds % 86400) % 3600) % 60;
                          return numdays + " days " + numhours + " hours " + numminutes + " minutes " + numseconds + " seconds";

                        }
                        let player_data = data.player;
                        let playerName = '<p>BF4 Player Name: ' + (player_data.name) + '</p>';
                      	let timePlayed = '<p>Time played: ' + (secondsToString(player_data.timePlayed)) + '</p>';
                        let playerBattlelog = '<a href=' + (player_data.blPlayer) + '>Player Profile</a>';
                      	let playerImage = '<p><img src="'+(player_data.name=== 'Diabeeeeeeeeetus'? eric : violet)+ '"alt="Smiley face" height="100"width="100"></p>'
                      
                     
                        self.state.infowindow.setContent(longName + playerImage+ playerName + timePlayed + playerBattlelog );
                    });
                }
            )
            .catch(function (err) {
                self.state.infowindow.setContent("Sorry data can't be loaded");
            });
    }
    //Close the infowindow for the marker
  
    closeInfoWindow() {
        if (this.state.prevmarker) {
            this.state.prevmarker.setAnimation(null);
        }
        this.setState({
            'prevmarker': ''
        });
        this.state.infowindow.close();
    }

    // Render function of App

    render() {
        return (
            <div>
                <List key="100" ourLocations={this.state.ourLocations} openInfoWindow={this.openInfoWindow}
                              closeInfoWindow={this.closeInfoWindow}/>
                <div id="map"></div>
            </div>
        );
    }
}

export default App;

//Load the google maps Asynchronously

function loadMapJS(src) {
    let ref = window.document.getElementsByTagName("script")[0];
    let script = window.document.createElement("script");
    script.src = src;
    script.async = true;
    script.onerror = function () {
        document.write("Google Maps can't be loaded");
    };
    ref.parentNode.insertBefore(script, ref);
}