import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleToyDetails = () => {
    const details=useLoaderData()
    console.log(details);
    return (
        <div>
            this is single card details
        </div>
    );
};

export default SingleToyDetails;