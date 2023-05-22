
import React, { useContext, useEffect, useState } from 'react';
import MyToysRow from './MyToysRow/MyToysRow';
import { AuthContext } from '../../component/Provider/AuthProvider';
import Swal from 'sweetalert2';
import DynamicTitle from '../../Shared/DynamicTitle/DynamicTitle';

const MyToys = () => {
    const { user } = useContext(AuthContext)

    // new 
    const [loadedData, setLoadedData] = useState([])
    const [sortedCategories, setSortedCategories] = useState(loadedData);
    const [searchText, setSearchText] = useState('')

    // const [categories, setCategories] = useState([])

    // previous
    // const [sortedCategories, setSortedCategories] = useState(categories);
    DynamicTitle('All my toys')

    // new  
    useEffect(() => {
        fetch(`https://toy-shop-phi.vercel.app/order-collection?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setLoadedData(data)
                setSortedCategories(data)
            })
    }, [])

    // const handleSortAscending = () => {
    //     const sorted = [...loadedData].sort((a, b) => a.price - b.price);
    //     setSortedCategories(sorted);
    // };
    // const handleSortDescending = () => {
    //     const result = [...loadedData].sort((a, b) => b.price - a.price);
    //     setSortedCategories(result);
    // }

    const handleDeleteMyToys = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-shop-phi.vercel.app/my-toys/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                        const remaining = loadedData.filter(booking => booking._id !== _id)
                        setLoadedData(remaining)

                    })

            }
        })
    }

    const handleSortChange = (event) => {
        const selectedOption = event.target.value;

        if (selectedOption === "ascending") {
            const sorted = [...loadedData].sort((a, b) => a.price - b.price);
            setSortedCategories(sorted);
        } else if (selectedOption === "descending") {
            const sorted = [...loadedData].sort((a, b) => b.price - a.price);
            setSortedCategories(sorted);
        }
    };

    return (
        <div>

            {/* <div className='flex justify-center space-x-4 mb-4'>
                <button onClick={handleSortAscending} className="btn btn-outline btn-primary">Ascending</button>
                <button onClick={handleSortDescending} className="btn btn-outline btn-secondary">Descending</button>
            </div> */}
            <div className='flex justify-end lg:mr-10 space-x-4 mt-4 mb-4'>
                <select onChange={handleSortChange}>
                    <option value="filter" selected>Filter</option>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                </select>
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
                            sortedCategories.map(loaded => <MyToysRow handleDeleteMyToys={handleDeleteMyToys} key={loaded._id} loaded={loaded} ></MyToysRow>)
                        }
                    </tbody>
                </table>
            </div>


            {/* previous */}

        </div>
    );
};

export default MyToys;