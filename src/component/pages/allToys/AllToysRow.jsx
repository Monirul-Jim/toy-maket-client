import React from 'react';
import { Link } from 'react-router-dom';

const AllToysRow = ({ category }) => {
    const { _id, description, email, name, photo, price, quantity, rating, selectedOption, sellerName } = category;
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div></div>
                </div>
            </td>
            <td>
                <div className="flex flex-col">
                    <span className="mb-2">{name}</span>
                </div>
            </td>
            <td>
                <div className="flex flex-col">
                    <span className="mb-2">Email: {email}</span>
                </div>
            </td>
            <td>
                <div className="font-bold">Price: {price}</div>
            </td>
            <td>
                <div className="font-bold">{quantity}</div>
            </td>
            <td>
                <div className="font-bold">{description}</div>
            </td>
            <td>
                <div className="font-bold">{name}</div>
            </td>
            <th>
                <Link to={`/all-toys-details/${_id}`}><button className="btn btn-ghost btn-xs"> View Details</button></Link>
            </th>
            <td>
            </td>
        </tr>
    );
};

export default AllToysRow;