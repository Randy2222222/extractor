document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const img = document.getElementById('imageDisplay');
        img.src = e.target.result; // Set the image source to the file data
        img.style.display = 'block'; // Make the image visible
    };

    if (file) {
        reader.readAsDataURL(file); // Read the file as a data URL
    }
});
