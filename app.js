// Run the application
document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById("download-btn");
    const videoUrlInput = document.getElementById("video-url");
    const videoDisplay = document.getElementById("video-display");

    // Add a click event listener to the "Find Video" button
    downloadBtn.addEventListener("click", () => {
        const videoUrl = videoUrlInput.value.trim();

        // Check if the input is empty
        if (!videoUrl) {
            alert("Please enter a video URL.");
            return;
        }

        // Simulate generating a downloadable link
        const fakeDownloadLink = `https://example.com/download?video=${encodeURIComponent(videoUrl)}`;

        // Display the downloadable link
        videoDisplay.innerHTML = `
            <h3>Download Ready!</h3>
            <p>
                <a href="${fakeDownloadLink}" target="_blank" download>
                    Click here to download the video
                </a>
            </p>
        `;
        videoDisplay.style.display = "block";
    });
});