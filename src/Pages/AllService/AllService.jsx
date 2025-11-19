import React, {  useEffect, useState } from 'react';
import ServiceCard from '../../Components/HomeLayout/ServiceCard';
import { AuthContext } from '../../context/AuthContext';



const AllService = () => {
    const [services, setServices] = useState([]);
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchServices = () => {
        setLoading(true);
        let url = "https://homehero-server-nine.vercel.app/allService";

        if (minPrice && maxPrice) {
            url += `?minPrice=${minPrice}&maxPrice=${maxPrice}`;
        }

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchServices()
        // fetch("https://homehero-server-nine.vercel.app/allService")
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setServices(data);
        //         setLoading(false);
        //     });
    }, []);


    if (loading) {
        return (
            <div className="flex flex-col justify-center items-center h-screen   gap-4">
                <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-lg font-semibold text-gray-600">Loading...</p>
            </div>
        )

    }

    return (
        <div className='pt-16 w-11/12 mx-auto'>
            <h1 className='text-center font-bold text-3xl md:text-4xl '>Our All <span className='text-orange-600'>Service</span></h1>
            <p className="mt-3 text-center">
                Filter and explore services with price range.
            </p>

            <div className="flex gap-3 justify-center mt-10">
                <input
                    type="number"
                    placeholder="Min Price"
                    className="input input-bordered focus:border-0"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Max Price"
                    className="input input-bordered focus:border-0"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                />

                <button
                    className="btn bg-orange-500 text-white"
                    onClick={fetchServices}
                >
                    Filter
                </button>
            </div>



            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 w-full'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default AllService;