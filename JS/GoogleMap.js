function iniciarMap(){ //API mini map en el footer
    var coord = {lat:-37.9994843 ,lng: -57.551737};
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 14,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}
