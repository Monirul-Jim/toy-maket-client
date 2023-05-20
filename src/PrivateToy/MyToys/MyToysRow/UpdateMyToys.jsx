import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateMyToys = () => {
    const categories=useLoaderData()
    const { _id} = categories
    const handleUpdateToy = (event) => {
        event.preventDefault()
        const form =event.target
        const price = form.price.value
        const quantity = form.quantity.value
        const description = form.description.value
        const updateProduct = { quantity, price,description}
        fetch(`http://localhost:5000/update-toy-collection/${_id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(updateProduct)

        })
        .then(res=>res.json())
        .then(data=>{
           if(data. modifiedCount>0){
            Swal.fire({
                title: 'Successful!',
                text: 'You added a coffee ',
                icon: 'success',
                confirmButtonText: 'Go Back'
              })
           }
        })

    }
    return (
        <div className="flex justify-center bg-slate-300 p-4 " >
            <form onSubmit={handleUpdateToy} >
                <div className='grid sm:grid-cols-1 '>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' placeholder="price" className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="text" name='quantity' placeholder="available quantity" className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">write about your toy</span>
                        </label>
                        <input type="text" name='description' placeholder="description" className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <input type="submit" className='btn btn-block mt-4' value="Add Toy" />
                </div>
            </form>
        </div>
    );
};

export default UpdateMyToys;