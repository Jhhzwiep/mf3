// Main JavaScript entry point for the video downloader application

// Import necessary modules
import VideoDisplay from '../components/VideoDisplay.js';
import LinkInput from '../components/LinkInput.js';
import { fetchVideoUrl, downloadVideo } from './videoHandler.js';

// Initialize the application
function init() {
    const appContainer = document.getElementById('app');

    // Create and append LinkInput component
    const linkInput = new LinkInput();
    appContainer.appendChild(linkInput.render());

    // Create and append VideoDisplay component
    const videoDisplay = new VideoDisplay();
    appContainer.appendChild(videoDisplay.render());

    // Set up event listeners
    linkInput.on('submit', async (url) => {
        const videoUrl = await fetchVideoUrl(url);
        videoDisplay.loadVideo(videoUrl);
    });

    videoDisplay.on('download', (videoUrl) => {
        downloadVideo(videoUrl);
    });
}

// Run the application
document.addEventListener('DOMContentLoaded', init);

// Wait for the DOM to fully load before attaching event listeners
document.addEventListener("DOMContentLoaded", () => {
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