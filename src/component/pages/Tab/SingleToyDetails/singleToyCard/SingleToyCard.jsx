import React from 'react';

const SingleToyCard = ({ detail }) => {
    const {Picture, Name, Price, Rating, Description, Features, battery_backup,seller_name,quantity,seller_email } = detail
    // const handleAddToCart=()=>{
    //     fetch("http://localhost:5000/order-collection",{
    //         method:"POST",
    //         headers:{
    //             'content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(orderData)

    //     })
    //     .then(res=>res.json())
    //     .then(data=>console.log(data))
    // }
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img className='w-96' src={Picture} alt="Toy" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                       Toy Name : {Name}
                    </h2>
                    <div>
                        <h1> <span className='text-xl font-bold'>Seller Name:</span> {seller_name}</h1>
                       <p><span className='text-xl font-bold'>Seller Email:</span> {seller_email}</p>
                    </div>
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
                    <p> Available Quantity: {quantity}</p>
                    <p>Rating:{Rating}</p>
                   </div>
                </div>
                <button  className="btn btn-active btn-primary w-48">Add To Cart</button>
            </div>
        </div>
    );
};

export default SingleToyCard;