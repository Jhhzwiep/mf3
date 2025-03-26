// Run the application
document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById("download-btn");
    const videoUrlInput = document.getElementById("video-url");
    const videoDisplay = document.getElementById("video-display");

    // Add a click event listener to the "Find Video" button
    downloadBtn.addEventListener("click", async () => {
        const videoUrl = videoUrlInput.value.trim();

        // Check if the input is empty
        if (!videoUrl) {
            alert("Please enter a video URL.");
            return;
        }

        try {
            // Call the RapidAPI YouTube downloader API
            const response = await fetch('https://youtube-video-fast-downloader-24-7.p.rapidapi.com/video', {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '28aef0606amsh3885c4eb9415d39p140278jsn7eba9dfaa0e2',
                    'X-RapidAPI-Host': 'youtube-video-fast-downloader-24-7.p.rapidapi.com'
                },
                params: {
                    url: videoUrl
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch download link');
            }

            const data = await response.json();

            // Extract the download link from the API response
            const downloadLink = data.video[0].url; // Adjust based on the API's response structure

            // Display the downloadable link
            videoDisplay.innerHTML = `
                <h3>Download Ready!</h3>
                <p>
                    <a href="${downloadLink}" target="_blank" download>
                        Click here to download the video
                    </a>
                </p>
            `;
            videoDisplay.style.display = "block";
        } catch (error) {
            console.error(error);
            alert('Failed to generate download link.');
        }
    });
});