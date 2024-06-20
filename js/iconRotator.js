// iconRotator.js

document.addEventListener("DOMContentLoaded", function() {
    const icons = ['uil-code', 'uil-heart', 'uil-star', 'uil-smile']; 
    const iconPlaceholder = document.getElementById('icon-placeholder');
    let currentIndex = 0;

    function displayNextIcon() {
        iconPlaceholder.className = 'uil ' + icons[currentIndex];
        currentIndex = (currentIndex + 1) % icons.length; 
    }
   
    displayNextIcon();

    setInterval(displayNextIcon, 2000);
});
