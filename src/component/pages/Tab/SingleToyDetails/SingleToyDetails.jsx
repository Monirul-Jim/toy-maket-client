import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleToyCard from './singleToyCard/SingleToyCard';

const SingleToyDetails = () => {
    const details=useLoaderData()
    return (
        <div className='mt-4'>
            <SingleToyCard detail={details} ></SingleToyCard>
        </div>
    );
};

export default SingleToyDetails;