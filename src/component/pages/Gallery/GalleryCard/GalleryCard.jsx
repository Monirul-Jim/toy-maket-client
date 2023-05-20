import React from 'react';

const GalleryCard = ({ data }) => {
    const { url } = data;
    return (


        <div data-aos="fade-right" className="max-w-sm rounded overflow-hidden shadow-lg mt-4 ">
            <img className="w-64 object-cover" src={url} alt="Toy" />

        </div>
    );
};

export default GalleryCard;