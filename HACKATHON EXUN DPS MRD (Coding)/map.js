// Mock data simulating marine life sightings with unique locations
const initialSightings = [
    { species: "Dolphin", latitude: 34.0505, longitude: -118.2551, date: "2024-11-01" },
    { species: "Sea Turtle", latitude: 25.7617, longitude: -80.1918, date: "2024-10-30" },
    { species: "Great White Shark", latitude: 34.2000, longitude: -119.2000, date: "2024-11-02" },
    { species: "Orca", latitude: 47.6062, longitude: -122.3321, date: "2024-11-03" },
    { species: "Manatee", latitude: 27.9949, longitude: -81.7603, date: "2024-11-01" },
    { species: "Mako Shark", latitude: 36.7783, longitude: -119.4179, date: "2024-10-25" },
    { species: "Blue Whale", latitude: 34.0000, longitude: -118.5000, date: "2024-11-01" },
    { species: "Hammerhead Shark", latitude: 26.1224, longitude: -80.1373, date: "2024-11-02" },
    { species: "Walrus", latitude: 61.2163, longitude: -149.8949, date: "2024-10-30" },
    { species: "Narwhal", latitude: 75.0510, longitude: -111.1710, date: "2024-10-28" },
    { species: "Jellyfish", latitude: 18.2208, longitude: -66.5901, date: "2024-10-27" },
    { species: "Anglerfish", latitude: 30.2672, longitude: -97.7431, date: "2024-10-26" },
    { species: "Clownfish", latitude: -10.0, longitude: 149.0, date: "2024-11-01" },
    { species: "Octopus", latitude: 34.0522, longitude: -118.2437, date: "2024-10-29" },
    { species: "Beluga Whale", latitude: 70.0, longitude: -160.0, date: "2024-10-30" },
    { species: "Lionfish", latitude: -17.0, longitude: -149.0, date: "2024-10-31" },
    { species: "Sperm Whale", latitude: 37.7749, longitude: -122.4194, date: "2024-11-01" },
    { species: "Sea Otter", latitude: 38.2975, longitude: -122.2869, date: "2024-11-02" },
    { species: "Pufferfish", latitude: -25.0, longitude: 153.0, date: "2024-11-01" },
    { species: "Coral", latitude: -12.0, longitude: 77.0, date: "2024-11-01" },
    { species: "Starfish", latitude: 37.7749, longitude: -122.4194, date: "2024-10-28" },
    { species: "Tuna", latitude: 32.7157, longitude: -117.1611, date: "2024-11-01" },
    { species: "Barracuda", latitude: 28.5383, longitude: -81.3792, date: "2024-11-02" },
    { species: "Angel Shark", latitude: 36.0, longitude: -5.0, date: "2024-11-01" },
    { species: "Cuttlefish", latitude: -33.0, longitude: 151.0, date: "2024-11-01" },
    { species: "Giant Squid", latitude: 40.0, longitude: -70.0, date: "2024-11-01" },
    { species: "Moray Eel", latitude: 18.0, longitude: -77.0, date: "2024-11-01" },
    { species: "Box Jellyfish", latitude: -16.0, longitude: 146.0, date: "2024-11-01" },
    { species: "Pygmy Sperm Whale", latitude: 10.0, longitude: -61.0, date: "2024-11-01" },
    { species: "Bottlenose Dolphin", latitude: 35.0, longitude: -75.0, date: "2024-11-01" },
    { species: "Tiger Shark", latitude: 25.0, longitude: -80.0, date: "2024-11-01" },
    { species: "Green Sea Turtle", latitude: 16.0, longitude: -61.0, date: "2024-11-01" },
    { species: "Leatherback Turtle", latitude: 8.0, longitude: -79.0, date: "2024-11-01" },
    { species: "Stingray", latitude: -26.0, longitude: 153.0, date: "2024-11-01" },
    { species: "Flying Fish", latitude: 15.0, longitude: -60.0, date: "2024-11-01" },
    { species: "Snapper", latitude: -34.0, longitude: 151.0, date: "2024-11-01" },
    { species: "Grouper", latitude: 22.0, longitude: -159.0, date: "2024-11-01" },
    { species: "Sea Horse", latitude: 33.0, longitude: -118.0, date: "2024-11-01" },
    { species: "Clown Triggerfish", latitude: -20.0, longitude: 57.0, date: "2024-11-01" },
    { species: "Zebra Shark", latitude: 26.0, longitude: -78.0, date: "2024-11-01" },
    { species: "Barramundi", latitude: -10.0, longitude: 142.0, date: "2024-11-01" },
    { species: "European Eel", latitude: 53.0, longitude: -7.0, date: "2024-11-01" },
    { species: "Spotted Cowfish", latitude: -25.0, longitude: 153.0, date: "2024-11-01" },
    { species: "Seahorse", latitude: 5.0, longitude: 100.0, date: "2024-11-01" },
    { species: "Humpback Whale", latitude: 60.0, longitude: -145.0, date: "2024-11-01" },
    { species: "Northern Right Whale", latitude: 42.0, longitude: -70.0, date: "2024-11-01" },
    { species: "Mantis Shrimp", latitude: -16.0, longitude: 152.0, date: "2024-11-01" },
    { species: "Goblin Shark", latitude: 35.0, longitude: 138.0, date: "2024-11-01" },
    { species: "Viperfish", latitude: 15.0, longitude: -80.0, date: "2024-11-01" },
    { species: "Oarfish", latitude: 30.0, longitude: -120.0, date: "2024-11-01" },
    { species: "Purple Sea Urchin", latitude: 48.0, longitude: -123.0, date: "2024-11-01" },
    { species: "Cone Snail", latitude: 19.0, longitude: -155.0, date: "2024-11-01" },
    { species: "Pacific Bluefin Tuna", latitude: 35.0, longitude: -170.0, date: "2024-11-01" },
    { species: "Chinook Salmon", latitude: 60.0, longitude: -135.0, date: "2024-11-01" },
    { species: "Prawn", latitude: -20.0, longitude: 116.0, date: "2024-11-01" },
    { species: "Clown Knife Fish", latitude: 25.0, longitude: -80.0, date: "2024-11-01" }
];

let sightings = [...initialSightings]; // Create a copy of the initial data
const map = L.map('map', {
    worldCopyJump: false // Prevent the map from repeating when zoomed out
}).setView([34.0505, -118.2551], 4);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 3,
}).addTo(map);

// Function to display sightings on the map and in the list
function displaySightings() {
    const sightingsList = document.getElementById('sightings-list');
    sightingsList.innerHTML = ''; // Clear previous list
    map.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
            map.removeLayer(layer); // Remove existing markers
        }
    });

    sightings.forEach(sighting => {
        // Add marker to map
        L.marker([sighting.latitude, sighting.longitude]).addTo(map)
            .bindPopup(`${sighting.species} sighted on ${sighting.date}`);

        // Add sighting to list
        const listItem = document.createElement('li');
        listItem.textContent = `${sighting.species} - Latitude: ${sighting.latitude.toFixed(5)}, Longitude: ${sighting.longitude.toFixed(5)}, Date: ${sighting.date}`;
        sightingsList.appendChild(listItem);
    });
}

// Function to generate a random position for a marker closer to the previous position
function generateRandomPosition(existingPosition) {
    let newPosition;
    let isFarEnough;

    do {
        // Generate new random position with smaller movement
        const latOffset = (Math.random() - 0.5) * 0.50; // Change within ~2.2 km
        const lngOffset = (Math.random() - 0.5) * 0.50; // Change within ~2.2 km

        newPosition = {
            latitude: existingPosition.latitude + latOffset,
            longitude: existingPosition.longitude + lngOffset
        };

        // Check if the new position is far enough from all other positions
        isFarEnough = sightings.every(pos => {
            const distance = calculateDistance(newPosition.latitude, newPosition.longitude, pos.latitude, pos.longitude);
            return distance > 1; // Minimum distance of 1 km
        });
    } while (!isFarEnough);

    return newPosition;
}

// Function to check distance between two points
function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
}

// Function to move markers to new unique positions
function moveMarkers() {
    sightings.forEach((sighting) => {
        const newPosition = generateRandomPosition(sighting);
        sighting.latitude = newPosition.latitude;
        sighting.longitude = newPosition.longitude;
    });
    displaySightings(); // Update the display
}

// Display initial sightings
displaySightings();

// Move markers every 5 seconds
setInterval(moveMarkers, 2500);

