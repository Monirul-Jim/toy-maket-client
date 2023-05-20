import React, { useContext, useEffect, useState } from 'react';
import MyToysRow from './MyToysRow/MyToysRow';
import { AuthContext } from '../../component/Provider/AuthProvider';
import Swal from 'sweetalert2';
import DynamicTitle from '../../Shared/DynamicTitle/DynamicTitle';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [categories, setCategories] = useState([])
    const [sortedCategories, setSortedCategories] = useState(categories);
    DynamicTitle('All my toys')
    useEffect(() => {
        if(user?.email){
            fetch(`https://toy-shop-phi.vercel.app/my-toys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setCategories(data)
                setSortedCategories(data)
            })
        }
    }, [user])
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
                        const remaining = categories.filter(booking => booking._id !== _id)
                        setSortedCategories(remaining)

                    })

            }
        })
    }
    // const handleUpdateToy = (event) => {
    //     event.preventDefault()
    //     const form = event.target
    //     const price = form.price.value
    //     const quantity = form.quantity.value
    //     const description = form.description.value
    //     const id = form.id.value
    //     const updateProduct = { quantity, price, description }
    //     fetch(`https://toy-shop-phi.vercel.app/update-toy-collection/${id}`, {
    //         method: "PUT",
    //         headers: {
    //             "content-type": "application/json"
    //         },
    //         body: JSON.stringify(updateProduct)

    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             setCategories(data);
    //             if (data.modifiedCount > 0) {
    //                 Swal.fire({
    //                     title: 'Successful!',
    //                     text: 'You added a coffee ',
    //                     icon: 'success',
    //                     confirmButtonText: 'Go Back'
    //                 })
    //             }
    //         })

    // }
    const handleSortAscending = () => {
        const sorted = [...categories].sort((a, b) => a.price - b.price);
        setSortedCategories(sorted);
    };
    const handleSortDescending = () => {
        const result = [...categories].sort((a, b) => b.price - a.price);
        setSortedCategories(result);
    }
    return (
        <div>
            <div className='flex justify-center space-x-4 mb-4'>
                <button onClick={handleSortAscending} className="btn btn-outline btn-primary">Ascending</button>
                <button onClick={handleSortDescending} className="btn btn-outline btn-secondary">Descending</button>
            </div>
            <div className="overflow-x-auto w-full">
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sortedCategories.map(category => <MyToysRow  key={category._id} handleDeleteMyToys={handleDeleteMyToys} category={category} ></MyToysRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;