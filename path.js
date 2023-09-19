const icon = document.getElementById('icon'); // Assuming you have an HTML element with id 'icon'
const jsonUrl = './NTNU-Art_1F.json'; // Replace with your actual JSON file URL

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

function fetchAndSetIconPosition() {
  fetch(jsonUrl)
    .then(response => response.json())
    .then(data => {
      // Assuming the data is an array of objects
      const lastDataPoint = data[data.length - 1];
      updateIconPosition(lastDataPoint.X, lastDataPoint.Y);
    })
    .catch(error => console.error('Error fetching JSON:', error));
}

// Initial call to fetch and set icon position
fetchAndSetIconPosition();

// Update icon position every second
setInterval(fetchAndSetIconPosition, 1000);