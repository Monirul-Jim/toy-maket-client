import React from 'react';

const GalleryCard = ({ data }) => {
    const {url}=data;
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg mt-4">
            <img className="w-full object-cover" src={url} alt="Toy" />

        </div>
    );
};

export default GalleryCard;