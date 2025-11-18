
const UpdateUser = ({ updateRef, user, updateUserInfo, setUser }) => {

    const handleSaveInfo = async (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        console.log(name, photo)

        await updateUserInfo({
            displayName: name,
            photoURL: photo
        });

        setUser((prev) => ({...prev, displayName: name, photoURL: photo}));

        e.target.reset()
        updateRef.current.close();


    }

    return (
        <dialog ref={updateRef} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box w-full max-w-md">
                <h3 className="font-bold text-4xl text-center mb-4">
                    Update <span className="text-orange-600">Info!</span>
                </h3>

                <form onSubmit={handleSaveInfo} className="space-y-3">

                    <label className="label text-sm font-medium">Name</label>
                    <input type="text" name="name" defaultValue={user.displayName} placeholder="Enter your name" className="input input-bordered input-sm w-full focus:border-0" />



                    <label className="label text-sm font-medium">Photo URL</label>
                    <input type="text" name="photo" defaultValue={user.photoURL} placeholder="Enter photo URL" className="input input-bordered input-sm w-full focus:border-0" />

                    <input className="btn bg-orange-500 hover:bg-orange-600  w-full normal-case text-white font-bold py-2 mt-2" type="submit" value="Save Info" />



                </form>
            </div>
        </dialog>
    );
};

export default UpdateUser;