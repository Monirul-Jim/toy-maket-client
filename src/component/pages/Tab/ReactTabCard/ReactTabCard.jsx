import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const ReactTabCard = ({ category }) => {
    const { _id, Picture, Name, Price, Rating } = category
    const { user } = useContext(AuthContext)
    const handleViewDetails = () => {
        if (!user) {
            Swal.fire('You have to login first!', 'Please Login!', 'error');
        }
    };
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl " >
                <figure><img className='h-24' src={Picture} alt="Toy Picture" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Product Name: {Name}</h2>
                    <div className='flex space-x-2 sm:flex-row'>
                        <p className='text-xl '>Price: ${Price}</p>
                        <p>Rating :{Rating}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/category/${_id}`}><button onClick={handleViewDetails} className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReactTabCard;