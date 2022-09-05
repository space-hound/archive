document.addEventListener('DOMContentLoaded', initMap);
	function initMap() {
        var iasi = {lat: 47.1750158, lng: 27.574086999999963};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: iasi
        });
        var marker = new google.maps.Marker({
          position: iasi,
          map: map
        });
      };