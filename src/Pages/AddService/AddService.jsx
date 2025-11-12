import React, { use } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const AddService = () => {
    const {user} = use(AuthContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = {
            serviceName: e.target.serviceName.value,
            category: e.target.category.value,
            price : e.target.price.value,
            description: e.target.description.value,
            imageUrl: e.target.photo.value,
            providerName: user.displayName ,
            email: user.email


        }
        
        fetch('http://localhost:3000/allService', {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify( formData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.success){
            Swal.fire({
                icon: 'success',
                title: 'Service Added!',
                text: 'Your service has been added successfully.',
                confirmButtonColor: '#FF6B00'
            }).then(() => {
                navigate('/allService'); 
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Failed!',
                text: 'Something went wrong. Please try again.',
                confirmButtonColor: '#FF6B00'
            });
        }
            
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (

        <div className="card bg-base-100 w-11/12 mx-auto my-16 border border-orange-200 max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-5xl font-bold text-center">Add <span className='text-orange-600'>Service</span></h1>
                <form onSubmit={handleSubmit}>
                    <fieldset className="fieldset">

                        <label className="label">Service Name</label>
                        <input type="text" name='serviceName' className="input focus:border-0" placeholder="Service Name" />

                        <div>
                            <label className='label font-medium'>Category</label>
                            <select name="category" required defaultValue={""} className='select select-bordered w-[320px] rounded-md focus:border-0 mt-2 '>
                                <option value="" disabled>
                                    Select Category
                                </option>
                                <option value="cleaner"> Cleaner</option>
                                <option value="plumber"> Plumber</option>
                                <option value="electrician"> Electrician</option>


                            </select>

                        </div>



                        <label className="label">Price</label>
                        <input type="number" name='price' className="input focus:border-0" placeholder="Price" />

                        <label className="label">Image URL</label>
                        <input type="text" name='photo' className="input focus:border-0" placeholder="Image URL" />

                        <label className="label" >Provider Name</label>
                        <input type="text" value={user.displayName} name='providerName' className="input focus:border-0" placeholder="Provider Name" />

                        <label className="label">Email</label>
                        <input type="email" value={user.email} name='email' className="input focus:border-0" placeholder="Email" />

                        <div>
                            <label className='label font-medium'> Description</label>
                            <textarea name="description" required rows={"4"} className='textarea w-[320px] rounded-xl focus:border-0 mt-2' placeholder='Enter Description'></textarea>
                        </div>

                        <button className="btn bg-orange-500 hover:bg-orange-600 text-white font-bold mt-4">Add Service</button>
                    </fieldset>
                </form>
            </div>
        </div>

    );
};

export default AddService;