import React from 'react';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';

const Reservation = () => {

    const handleReserve = (event) =>{
        event.preventDefault()
        toast.success("Thank you for your reservation, we will call you for further information.")
    }

    return (
        <div>
            <div className='bg-white my-12' style={{ height: '500px', backgroundImage: `url(./bg.jpg)` }}>
                <form className='p-8'>
                    <div className='text-center my-8'>
                        <h2 className='text-3xl font-bold text-black my-2'>Reservation</h2>
                        <p className='text-black font-semibold'>For more info, please call 000 0000 0000</p>
                    </div>
                    <div>
                        <div className="">
                            <div className="card flex-shrink-0 w-full max-w-sm mx-auto">
                                <div className="card-body">
                                    <div className="form-control">
                                        <input type="text" placeholder="your email here" className="input input-bordered bg-white" required/>
                                    </div>
                                    <div className="form-control">
                                        <input type="number" placeholder="your number here" className="input input-bordered bg-white" />
                                    </div>
                                    <div className="form-control mt-6">
                                        <button onClick={handleReserve} className="btn bg-black text-white hover:bg-yellow-300 hover:text-black">Reserve a Table</button>
                                        <Toaster></Toaster>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Reservation;