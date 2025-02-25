fetch('data.json')
    .then((res) => res.json())
    .then((data) => {
        const buildings = document.getElementById('buildings-grid');

        data.forEach(building => {
            const buildingDiv = document.createElement('div');
            buildingDiv.classList.add('building')
            
            buildingDiv.style.backgroundImage = `url(/frontend/assets/${building.building_picture})`;
            buildingDiv.style.backgroundSize = 'cover';
            buildingDiv.style.backgroundPosition = 'center';

            const name = document.createElement('div');
            name.classList.add('building-name');
            name.textContent = building.name;

            const rooms = document.createElement('div'); 
            rooms.classList.add('rooms-text');
            
            const greenDot = document.createElement('img');
            greenDot.src = './green-circle.svg'; 
            greenDot.classList.add('green-dot');
            
            rooms.textContent = `${building.rooms_available} rooms available`;
            rooms.prepend(greenDot);

            buildingDiv.appendChild(rooms);
            buildingDiv.appendChild(name);

            buildings.appendChild(buildingDiv)

            
        });
    })

const logo = document.getElementById("door-logo");

logo.addEventListener('click', function() {
    const openDoor = document.getElementById("door-open");
    const closedDoor = document.getElementById("door-closed");
    // if (openDoor.style.display === 'none') {
    //     openDoor.style.display = 'block';
    //     closedDoor.style.display = 'none';
    // } else {
    //     openDoor.style.display = 'none';
    //     closedDoor.style.display = 'block';
    // }

    const isOpen = openDoor.style.display === "none";
    openDoor.style.display = isOpen ? "block" : "none";
    closedDoor.style.display = isOpen ? "none" : "block";
})