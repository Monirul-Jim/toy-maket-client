import React, { useEffect, useState } from 'react';
import AllToysRow from './AllToysRow';

const AllToys = () => {
    const [searchText,setSearchText]=useState('')
    const [loadedData,setLoadedData]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/order-collection')
        .then(res=>res.json())
        .then(data=>setLoadedData(data))
    },[])
    const handleSearch=()=>{
        fetch(`http://localhost:5000/order-collection/${searchText}`)
        .then(res=>res.json())
        .then(data=>setLoadedData(data))
    }
    return (
        <div>
            <div className='flex justify-center space-x-3'>
                <input onChange={(e)=>setSearchText(e.target.value)} type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />{' '}
                <button onClick={handleSearch} className="btn btn-primary">Search</button>
            </div>
            <div className="overflow-x-auto w-full mt-4">
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
                            loadedData.map(loaded => <AllToysRow key={loaded._id} loaded={loaded} ></AllToysRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;