import React from 'react';

const ReactTabCard = ({category}) => {
    const {Picture,Name,Price,Rating}=category
    return (
        <div>
             <div className="card w-96 bg-base-100 shadow-xl ">
                <figure><img src={Picture} alt="Toy Picture" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Product Name: {Name}</h2>
                    <div className='flex space-x-2 sm:flex-row'>
                    <p className='text-xl '>Price: ${Price}</p>
                    <p>{Rating}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReactTabCard;