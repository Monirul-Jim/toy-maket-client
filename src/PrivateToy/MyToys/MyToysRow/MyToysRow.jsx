import React from 'react';

const MyToysRow = ({category,handleDeleteMyToys}) => {
        const {_id,description,email,name,photo,price,quantity,rating,selectedOption,sellerName}=category
    return (
        <div>
            <tr>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={photo} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </td>
                <td>
                <div className="flex flex-col">
                    <span className="mb-2">Customer Name: {name}</span>
                </div>
                </td>
                <td>
                <div className="font-bold">{name}</div>
                </td>
                <td>
                <div className="font-bold">{name}</div>
                </td>
                <td>
                <div className="font-bold">{name}</div>
                </td>
                <td>
                <div className="font-bold">{name}</div>
                </td>
                <th>
                    <button className="btn btn-ghost btn-xs">Update</button>
                    <button onClick={()=>handleDeleteMyToys(_id)}  className="btn btn-ghost btn-xs">Delete</button>
                </th>
            </tr>
        </div>
    );
};

export default MyToysRow;