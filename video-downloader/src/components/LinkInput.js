import React, { useState } from 'react';

const LinkInput = ({ onSubmit }) => {
    const [url, setUrl] = useState('');

    const handleChange = (event) => {
        setUrl(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (url) {
            onSubmit(url);
            setUrl('');
        } else {
            alert('Please enter a valid video URL');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={url}
                onChange={handleChange}
                placeholder="Enter video URL"
                required
            />
            <button type="submit">Download</button>
        </form>
    );
};

export default LinkInput;