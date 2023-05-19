import React from 'react';

const AddedToy = () => {

    const handleAddInfo = (event) => {
        const form = event.preventDefault()
        const photo = form.photo.value
        const name = form.name.value
        const sellerName = form.sellerName.value
        const email = form.email.value
        const price = form.price.value
        const rating = form.rating.value
        const description = form.rating.value
        const selectedOption = form.selectToy.value;
        const result = {photo,name,sellerName,email,price,rating,description,selectedOption}
        console.log(result);


    }
    return (
        <div className='bg-slate-300 p-4'>
               <form onSubmit={handleAddInfo} >
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
               <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Give a Photo url?</span>
                    </label>
                    <input type="url" name='photo' placeholder="Photo Url" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name?</span>
                    </label>
                    <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Seller Name</span>
                    </label>
                    <input type="text" name='sellerName' placeholder="seller-name" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Seller Email</span>
                    </label>
                    <input type="email" name='email' placeholder="Seller Email" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="text" name='price' placeholder="price" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Quantity</span>
                    </label>
                    <input type="number" name='quantity' placeholder="available quantity" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="number" name='rating' placeholder="rating" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">write about your toy</span>
                    </label>
                    <input type="text" name='description' placeholder="description" className="input input-bordered w-full max-w-xs" />
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