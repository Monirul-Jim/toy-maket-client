import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MyToysRow = ({ category, handleDeleteMyToys }) => {
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
          <span className="mb-2">Customer Name: {name}</span>
        </div>
      </td>
      <td>
        <div className="font-bold">{price}</div>
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
        <Link to={`/update-my-toys/${_id}`}><button className="btn btn-ghost btn-xs">Update</button></Link>
        <button onClick={() => handleDeleteMyToys(_id)} className="btn btn-ghost btn-xs">
          Delete
        </button>
      </th>
    </tr>
  );
};

export default MyToysRow;