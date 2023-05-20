import React from 'react';

const AllToysRow = ({ loaded }) => {
    const {description,name,quantity,price,selectedOption,sellerName, }=loaded
    return (
            <tr>
                <td>
                    <div className="flex flex-col">
                        <span className="mb-2"> {sellerName}</span>
                    </div>
                </td>
                <td>
                    <div className="font-bold">{name}</div>
                </td>
                <td>
                    <div className="font-bold">{selectedOption}</div>
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
                <th>
                    <button className="btn btn-ghost btn-xs"> View Details</button>
                </th>
            </tr>
    );
};

export default AllToysRow;