const blur = document.getElementById('blur');
const spacing = document.getElementById('spacing');
const color = document.getElementById('color');

blur.addEventListener('input', (event) => {
    const blurValue = event.target.value; // Get the current value of the range slider
    image.style.filter = `blur(${blurValue}px)`; // Update the blur value dynamically
});

spacing.addEventListener('input', (event) => {
    const blurValue = event.target.value; // Get the current value of the range slider
    image.style.filter = `blur(${blurValue}px)`; // Update the blur value dynamically
});

color.addEventListener('input', (event) => {
    const blurValue = event.target.value; // Get the current value of the range slider
    image.style.filter = `blur(${blurValue}px)`; // Update the blur value dynamically
});