import React from 'react';

const VideoDisplay = ({ videoUrl }) => {
    return (
        <div className="video-display">
            {videoUrl ? (
                <video controls>
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <p>Please provide a video URL to display.</p>
            )}
        </div>
    );
};

export default VideoDisplay;