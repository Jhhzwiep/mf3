// videoHandler.js

const downloadVideo = (videoUrl) => {
    const link = document.createElement('a');
    link.href = videoUrl;
    link.download = videoUrl.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

const fetchVideoUrl = async (inputUrl) => {
    try {
        const response = await fetch(inputUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.videoUrl; // Assuming the API returns a JSON object with a videoUrl property
    } catch (error) {
        console.error('Error fetching video URL:', error);
        return null;
    }
};

export { downloadVideo, fetchVideoUrl };