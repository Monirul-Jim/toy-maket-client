import React from 'react';

const ShowModal = ({handleUpdateToy}) => {
    
    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-full">
                <form onSubmit={handleUpdateToy}>
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
                    <div className="modal-action flex justify-start">
                        <label htmlFor="my-modal" className="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowModal;