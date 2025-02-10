function updateSize() {
    const size = document.getElementById('sizeInfo');
    const width = window.innerWidth;
    const height = window.innerHeight;
    size.querySelector('h1').textContent = `Width: ${width} and Height: ${height}`;
}

// Call the function on page load
updateSize();

// Add event listener for window resize
window.addEventListener('resize', updateSize);