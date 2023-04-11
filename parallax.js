// Get the background element
const background = document.querySelector('.background');

// Set the size of the background element
background.style.width = '100%';
background.style.height = '100%';

// Calculate the center of the background element
const centerX = background.offsetWidth / 2;
const centerY = background.offsetHeight / 2;

// Add a mousemove event listener to the document
document.addEventListener('mousemove', (event) => {
  // Calculate the distance of the mouse from the center of the background element
  const distanceX = event.clientX - centerX;
  const distanceY = event.clientY - centerY;

  // Calculate the parallax offset based on the mouse distance and a multiplier
  const multiplier = 0.02;
  const offsetX = distanceX * multiplier;
  const offsetY = distanceY * multiplier;

  // Apply the parallax offset to the background position
  background.style.backgroundPositionX = `calc(50% + ${offsetX}px)`;
  background.style.backgroundPositionY = `calc(50% + ${offsetY}px)`;
});
