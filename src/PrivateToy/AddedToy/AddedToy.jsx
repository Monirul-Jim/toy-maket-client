import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import DynamicTitle from '../../Shared/DynamicTitle/DynamicTitle';
import { AuthContext } from '../../component/Provider/AuthProvider';

const AddedToy = () => {
    const {user}=useContext(AuthContext)
    DynamicTitle("Add a toy")
    const handleAddInfo = (event) => {
        event.preventDefault()
        const form = event.target
        const photo = form.photo.value
        const name = form.name.value
        const sellerName =  user ? user.displayName : form.sellerName.value
        const email = user ? user.email : form.email.value;
        const price = form.price.value
        const rating = form.rating.value
        const description = form.description.value
        const quantity = form.quantity.value
        const selectedOption = form.selectToy.options[form.selectToy.selectedIndex].value;
        const addedProduct = { photo, name, quantity, sellerName, email, price, rating, description, selectedOption }
        fetch('https://toy-shop-phi.vercel.app/order-collection', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Congratulation!',
                        text: 'You have added a product',
                        icon: 'success',
                        confirmButtonText: 'Go Back'
                    })
                }
            })


    }
    return (
        <div className='bg-slate-300 p-4'>
            <form onSubmit={handleAddInfo} >
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Give a Photo url?</span>
                        </label>
                        <input type="url" name='photo' placeholder="Photo Url" className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Toy Name?</span>
                        </label>
                        <input type="text" name='name' placeholder="Enter a toy name" className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name='sellerName' defaultValue={user?.displayName} placeholder="seller-name" className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="email" name='email' defaultValue={user?.email} placeholder="Seller Email" className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' placeholder="$ price" className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="text" name='quantity' placeholder="available quantity" className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="number" name='rating' placeholder="rating" className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">write about your toy</span>
                        </label>
                        <input type="text" name='description' placeholder="description" className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="relative mt-4">
                        <select name='selectToy' className=" w-25 appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500">
                            <option>Sports Car</option>
                            <option>Mini Fire Truck</option>
                            <option>Police Car</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M10 12l-6-6 1.5-1.5L10 9l4.5-4.5L16 6l-6 6z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <input type="submit" className='btn btn-block mt-4' value="Add Toy" />
            </form>

        </div>
    );
};

export default AddedToy;