import React, { useContext, useEffect, useState } from 'react';
import MyToysRow from './MyToysRow/MyToysRow';
import { AuthContext } from '../../component/Provider/AuthProvider';
import Swal from 'sweetalert2';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [categories,setCategories]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/my-toys?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setCategories(data)
        })
    },[])
    const handleDeleteMyToys= _id => {
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
                fetch(`http://localhost:5000/my-toys/${_id}`, {
                    method: 'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                    const remaining=categories.filter(booking=>booking._id !==_id)
                    setCategories(remaining)
    
                })
               
            }
        })
    }
    return (
        <div>
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
                            <th>selectedOption</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categories.map(category => <MyToysRow key={category._id} handleDeleteMyToys={handleDeleteMyToys} category={category} ></MyToysRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;