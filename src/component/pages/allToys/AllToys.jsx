import React, { useContext, useEffect, useState } from 'react';
import AllToysRow from './AllToysRow';
import DynamicTitle from '../../../Shared/DynamicTitle/DynamicTitle';
import { AuthContext } from '../../Provider/AuthProvider';

const AllToys = () => {
    const { user } = useContext(AuthContext)
    const [categories, setCategories] = useState([])
    const [searchText, setSearchText] = useState('')
    DynamicTitle('All my toys')
    useEffect(() => {
        if (user?.email) {
            fetch(`https://toy-shop-phi.vercel.app/my-toys?email=${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    setCategories(data)
                })
        }
    }, [user])

    const handleSearch = () => {
        fetch(`https://toy-shop-phi.vercel.app/order/${searchText}`)


            .then(res => res.json())
            .then(data => {
                setCategories(data)
            })
    }
 



    return (
        <div>
            <div className='flex justify-center space-x-3'>
                <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="search by car name" className="input input-bordered input-primary w-full max-w-xs" />{' '}
                <button onClick={handleSearch} className="btn btn-primary">Search</button>
            </div>
            <div className="overflow-x-auto w-full mt-4">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Description</th>
                            <th>Sub Category</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categories.map(category => <AllToysRow key={category._id} category={category} ></AllToysRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;

// {/* <div className="overflow-x-auto w-full mt-4">
// <table className="table w-full">
//     {/* head */}
//     <thead>
//         <tr>
//             <th>Seller</th>
//             <th>Toy Name</th>
//             <th> Sub-category</th>
//             <th>Price</th>
//             <th>Available Quantity</th>
//             <th>Description</th>
//             <th>Details Button</th>
//         </tr>
//     </thead>
//     <tbody>
//         {
//             loadedData.map(loaded => <AllToysRow key={loaded._id} loaded={loaded} ></AllToysRow>)
//         }
//     </tbody>
// </table>
// </div> */}