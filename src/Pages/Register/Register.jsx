import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';

const Register = () => {
    const {signInWithGoogle,createUser,setUser  } = use(AuthContext)

    const navigate = useNavigate()

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            setUser(result.user)

            const newUser = {
                name: result.user.displayName,
                email: result.user.email,
                photo : result.user.photoURL
            }

            fetch('http://localhost:3000/users',{
                method:'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log('data after user save', data)
                navigate("/")
            })

        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleRegister = e => {
         e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;

        const newUser = {name, email, password, photo}

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^])[A-Za-z\d@$!%*?&#^]{8,}$/;

        if (!passwordRegex.test(password)) {
        alert("Password must be 8+ chars & include uppercase, lowercase, number & special char");
        return;
    }

        createUser(email, password)

        fetch('http://localhost:3000/users', {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(result => {
                setUser(result.user)
                navigate("/")
        })
        .catch(error => {
            console.log(error)
        })
        
        
    }

    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-20">
            <div className="card-body">
                <h1 className="text-5xl font-bold">Register <span className='text-orange-500'>now</span>!</h1>
                <form onSubmit={handleRegister}>
                    <fieldset className="fieldset">

                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Name" required />

                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required/>

                        <label className="label">PhotoURL</label>
                        <input type="text" name='photo' className="input" placeholder="PhotoURL" required/>
                        
                        
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" required/>

                        <button className="btn text-white font-bold mt-4 bg-orange-500 hover:bg-orange-600">Register</button>

                        <p className='text-center font-bold '>OR</p>

                        <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-2 border-orange-500">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Register with Google
                        </button>

                        <p className='mt-4 text-center'>Already have an Account? Please <Link className='text-blue-800 hover:underline' to={'/login'}>Login</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;