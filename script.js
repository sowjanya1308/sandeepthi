// Upload image functionality
function uploadImage() {
    const uploadStatus = document.getElementById("uploadStatus");
    const fileInput = document.getElementById("fileUpload");

    if (fileInput && fileInput.files.length === 0) {
        uploadStatus.textContent = "Please select an image to upload.";
    } else {
        uploadStatus.textContent = "Image uploaded successfully!";
    }
}


function toggleMenu() {
    document.querySelector('.navbar-menu').classList.toggle('active');
}
