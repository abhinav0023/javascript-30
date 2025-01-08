const blur = document.getElementById('blur');
const spacing = document.getElementById('spacing');
const color = document.getElementById('color');

blur.addEventListener('input', (event) => {
    const blurValue = event.target.value; // Get the current value of the range slider
    image.style.filter = `blur(${blurValue}px)`; // Update the blur value dynamically
});

spacing.addEventListener('input', (event) => {
    const spaceValue = event.target.value; // Get the current value of the range slider
    image.style.paddingLeft = `${spaceValue}px`; // Update the padding dynamically
});

color.addEventListener('input', (event) => {
    const colorValue = event.target.value; // Get the current value of the input
    imgHolder.style.backgroundColor = `${colorValue}`; // Update the background color dynamically
});