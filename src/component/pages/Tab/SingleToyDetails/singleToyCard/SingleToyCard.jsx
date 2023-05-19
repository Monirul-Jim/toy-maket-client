import React from 'react';

const SingleToyCard = ({ detail }) => {
    const {Picture, Name, Price, Rating, Description, Features, battery_backup } = detail
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img className='w-96' src={Picture} alt="Toy" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                       Name : {Name}
                    </h2>

                    <div className="card-actions ">
                      <div className="w-full">
                      <h4> <span className='text-2xl font-bold'>Description: </span>{Description}</h4>
                      </div>
                      <div className="w-full">
                        <h1 className='text-2xl font-bold underline '>Toy Feature:</h1>
                        {
                          Features.map((feature, index) => <p key={index}>{feature}</p>)
                        }
                      </div>
                     <div>
                    <h1><span className='text-2xl font-bold'>Battery: </span> {battery_backup}</h1>
                     </div>
                    </div>
                    <div className='  text-xl'>
                    <p>Price: <span className='text-red-600'>${Price}</span></p>
                    <p>Rating:{Rating}</p>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToyCard;