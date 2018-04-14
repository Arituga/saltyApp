(function () {
    var db = firebase.database();
    var coords;

    var setCoordinates = function (position) {
        coords = position;

    };
    var getLocation = function () {
        if (navigator.geolocation) {

            navigator.geolocation.watchPosition(function (loc) {
                console.log(loc)
                firebase.database().ref('locations/123').set({
                    lat: loc.coords.latitude, lng: loc.coords.longitude, type: "police"
                });
            });

        }
    }

    getLocation();

    $('.submit-location').on('click', function (e) {
        e.preventDefault();
        getLocation();
        var x = coords;
        var id = generateId();
        afterCoords(id, x);


    });

    var generateId = function guidGenerator() {
        var S4 = function () {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    }

})();