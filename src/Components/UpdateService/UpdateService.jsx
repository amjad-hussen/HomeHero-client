import React from 'react';
import { useLoaderData, useNavigate} from 'react-router';
import { toast } from 'react-toastify';

const UpdateService = () => {
    const data = useLoaderData()
    console.log(data)

    const navigate =useNavigate()

    const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedService = {
      serviceName: form.serviceName.value,
      category: form.category.value,
      price: form.price.value,
      description: form.description.value,
    };

    fetch(`https://homehero-server-nine.vercel.app/service/${data._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedService)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Service updated successfully!");
          navigate('/myServices');
        } else {
          toast.error("Update failed!");
        }
      })
      .catch(error => {
        toast.error(error.message)
      })
  };
    return (
       <div className="card bg-base-100 w-11/12 mx-auto my-16 border border-orange-200 max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-4xl font-bold text-center">Update <span className='text-orange-600'>Service</span></h1>
                <form onSubmit={handleSubmit}>
                    <fieldset className="fieldset">

                        <label className="label">Service Name</label>
                        <input type="text" name='serviceName' className="input focus:border-0" placeholder="Service Name" defaultValue={data.serviceName} />

                        <div>
                            <label className='label font-medium'>Category</label>
                            <select name="category" defaultValue={data.category} required  className='select select-bordered w-[320px] rounded-md focus:border-0 mt-2 '>
                                <option value="" disabled>
                                    Select Category
                                </option>
                                <option value="cleaner"> Cleaner</option>
                                <option value="plumber"> Plumber</option>
                                <option value="electrician"> Electrician</option>


                            </select>

                        </div>

                        <label className="label">Price</label>
                        <input type="number" name='price' className="input focus:border-0" placeholder="Price" defaultValue={data.price} />

                        <div>
                            <label className='label font-medium'> Description</label>
                            <textarea name="description" required rows={"4"} className='textarea w-[320px] rounded-xl focus:border-0 mt-2' placeholder='Enter Description' defaultValue={data.description}></textarea>
                        </div>

                        <button className="btn bg-orange-500 hover:bg-orange-600 text-white font-bold mt-4">Add Service</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default UpdateService;