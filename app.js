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

        // Simulate finding the video and display the result
        videoDisplay.innerHTML = `
            <h3>Video Found!</h3>
            <p>Video URL: <a href="${videoUrl}" target="_blank">${videoUrl}</a></p>
        `;
        videoDisplay.style.display = "block";
    });
});