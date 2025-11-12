import React, { useRef } from 'react';


const UpdateUser = () => {

    

    const updateRef = useRef(null)


    const handleSaveInfo = e => {
            e.preventDefault()
            const name = e.target.name.value;
            const photo = e.target.photo.value;
            console.log(name, photo)
    
            const updateUser = { name, photo }
    
            updateRef.current.close();
    
            fetch(`http://localhost:3000/users/`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateUser)
            })
                .then(res => res.json())
                .then(data => {
                    alert('after update', data)
                })
        }

    return (
        <dialog ref={updateRef} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box w-full max-w-md">
                <h3 className="font-bold text-2xl mb-4">
                    Update <span className="text-orange-600">Info!</span>
                </h3>

                <form onSubmit={handleSaveInfo} className="space-y-3">

                    <label className="label text-sm font-medium">Name</label>
                    <input type="text" name="name" placeholder="Enter your name" className="input input-bordered input-sm w-full" />



                    <label className="label text-sm font-medium">Photo URL</label>
                    <input type="text" name="photo" placeholder="Enter photo URL" className="input input-bordered input-sm w-full" />

                    <input className="btn btn-neutral w-full normal-case text-base py-2 mt-2" type="submit" value="Save Info" />



                </form>
            </div>
        </dialog>
    );
};

export default UpdateUser;