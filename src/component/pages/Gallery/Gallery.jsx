import React, { useEffect, useState } from 'react';
import GalleryCard from './GalleryCard/GalleryCard';

const Gallery = () => {
    const [gallery,setGallery]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/gallery-photo')
        .then(res=>res.json())
        .then(data=>setGallery(data))
    },[])
    return (
        <div>
            <h1 className='mt-8 text-3xl font-semibold text-center'>All the product are available in our shop</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8'>
                {
                    gallery.map(data=><GalleryCard key={data._id} data={data} ></GalleryCard>)
                }
            </div>
        </div>
    );
};

export default Gallery;