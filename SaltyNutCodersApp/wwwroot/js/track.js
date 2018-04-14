(function () {
    var db = firebase.database();

    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    var trackLocation = function () {
        if (navigator.geolocation) {
            var id = readCookie("userId");
            var type = $('input[name="type"]:checked').val();
            navigator.geolocation.getCurrentPosition(function (loc) {
                console.log(loc);
                $('.info').text('lat: ' + loc.coords.latitude + 'lng: ' + loc.coords.longitude);
                firebase.database().ref('locations/' + id).set({
                    lat: loc.coords.latitude, lng: loc.coords.longitude, type: type
                });
            }, function (err) { }, {
                    enableHighAccuracy: true
                });

        }
    }


    $('.submit-location').on('click', function (e) {

        e.preventDefault();
        setInterval(trackLocation, 1000);
        //startTrackingLocation();

    });
})();