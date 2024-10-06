document.addEventListener('DOMContentLoaded', () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showSites, showError);
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  });
  
  function showSites(position) {
    const { latitude, longitude } = position.coords;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    
    // Fetch heritage sites from the backend server
    fetch('http://localhost:3000/sites')
      .then(response => response.json())
      .then(data => {
        const siteList = document.getElementById('sites');
        data.forEach(site => {
          const listItem = document.createElement('li');
          listItem.textContent = `${site.name} - Location: ${site.location}`;
          siteList.appendChild(listItem);
        });
      });
  }
  
  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert('User denied the request for Geolocation.');
        break;
      case error.POSITION_UNAVAILABLE:
        alert('Location information is unavailable.');
        break;
      case error.TIMEOUT:
        alert('The request to get user location timed out.');
        break;
      case error.UNKNOWN_ERROR:
        alert('An unknown error occurred.');
        break;
    }
  }
  