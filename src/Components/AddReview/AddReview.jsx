import React from 'react';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const AddReview = () => {
    const {id} = useParams()

    const handleReview = (e) => {
        e.preventDefault()

        const review = {
            rating: e.target.rating.value,
            comment: e.target.comment.value,
            date: new Date()
        };
        console.log(review)
         fetch(`http://localhost:3000/services/${id}/review`, {
            method: "PATCH",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {

            if(data.modifiedCount){
                toast.success("Your review has been added.")
                e.target.reset()
            }
                
        })
        .catch(err => {
            toast.error (err.message)
        })
        
    }

    return (
         <div className="w-11/12 mx-auto py-16">

            <form onSubmit={handleReview} className="space-y-4 w-4/12 mx-auto border border-orange-200 p-3 rounded-md">
             <h1 className="text-3xl font-bold mb-6 ">Add Review</h1>
                <select name="rating" className="select select-bordered w-full ">
                    <option value="1"> 1 Star</option>
                    <option value="2"> 2 Star</option>
                    <option value="3"> 3 Star</option>
                    <option value="4"> 4 Star</option>
                    <option value="5"> 5 Star</option>
                </select> <br />

                <textarea 
                    name="comment" 
                    className="textarea textarea-bordered w-full "
                    placeholder="Write your review..."
                ></textarea><br />

                <button className="btn bg-orange-600 text-white w-full ">Submit Review</button>
            </form>
        </div>
    );
};

export default AddReview;