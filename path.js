const icon = document.getElementById('icon'); 
const jsonUrl = './NTNU-Art_1F.json'; 

function calculatePosition(x, y) {
  const minX = 10.45;
  const maxX = 60.47;
  const minY = -11.64;
  const maxY = 15.91;

  const iconX = ((x - minX) / (maxX - minX)) * 100;
  const iconY = ((y - minY) / (maxY - minY)) * 100;

  return { x: iconX, y: iconY };
}

function updateIconPosition(x, y) {
  const { x: iconX, y: iconY } = calculatePosition(x, y);
  icon.style.left = `${iconX}%`;
  icon.style.top = `${iconY}%`;
}

function loadjson() {
    fetch(jsonUrl)
      .then(response => response.json())
      .then(data => {
        // Assuming the data is an array of objects
        data.forEach(item => {
          if (item.Floor === "1F") {  // Only consider 1F data
            updateIconPosition(item.X, item.Y);
          }
        });
      })
      .catch(error => console.error('Error fetching JSON:', error));
  }

// Initial call to fetch and set icon position
loadjson();

// Update icon position every second
setInterval(loadjson, 1000);