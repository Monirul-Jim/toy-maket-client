import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import AllToysRow from './AllToysRow';

const AllToys = () => {
    const loadedData=useLoaderData()
    console.log(loadedData);
    const {user}=useContext(AuthContext)
    return (
        <div>
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>Seller</th>
                        <th>Toy Name</th>
                        <th> Sub-category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Description</th>
                        <th>Details Button</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        loadedData.map(loaded => <AllToysRow key={loaded._id}  loaded={loaded} ></AllToysRow>)
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default AllToys;