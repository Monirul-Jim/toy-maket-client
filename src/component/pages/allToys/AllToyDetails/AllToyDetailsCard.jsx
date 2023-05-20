import React from 'react';

const AllToyDetailsCard = ({ loadingData }) => {
    const { photo, email, name, price, quantity, rating } = loadingData
    return (
        <div>
            <div className="card w-96 mx-auto bg-base-100 ">
                <figure><img src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">  {name}   </h2>
                    <p>{email}</p>
                    <p>Price: {price}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Quantity: {quantity}</div>
                        <div className="badge badge-outline">Rating: {rating}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllToyDetailsCard;