import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToyDetailsCard from './AllToyDetailsCard';

const AllToyDetails = () => {
    const loadingData=useLoaderData()
    console.log(loadingData);
    // const [details,setDetails]=useState(loadingData)

    return (
        <div>
            <AllToyDetailsCard loadingData={loadingData} ></AllToyDetailsCard>
        </div>
    );
};

export default AllToyDetails;