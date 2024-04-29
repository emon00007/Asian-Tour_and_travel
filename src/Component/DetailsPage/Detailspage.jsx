import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Detailspage = () => {
    const { id } = useParams();
    const [spotDet, setSpotDet] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/spotDetails/${id}`)
            .then(res => res.json())
            .then(data => {
                setSpotDet(data);
                console.log(data);
            });
    }, [id]); 

    return (
        <div>
           <div className="hero rounded-xl bg-amber-50  ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-1/2">
                        <h1 className=" text-2xl md:text-4xl lg:text-5xl font-bold">{spotDet.spotName}</h1>
                        <p className="text-gray-500 pt-4"> {spotDet.countryName}</p>
                        <hr className="w-full py-4 mt-4" />
                        <p className="text-gray-500 ">{spotDet.discription}</p>
                        <hr className="w-full py-4 mt-4" />
                        <p ><span className="font-bold">Cost: </span>{spotDet.avarageCost} </p>
                        <p className="mt-4 font-bold"><span className="">Visitor/Year:{spotDet.totalVisitorPerYear} </span> </p>
                        <p className="mt-4 font-bold"><span className="">Travel Time:{spotDet.travelTime} </span> </p>
                        <hr className="w-full py-4 mt-4" />
                        <p className="mt-4 font-bold "><span className="text-gray-500">Location: </span>{spotDet.location} </p>
                        <p className="mt-4 font-bold "><span className="text-gray-500">Facilities: </span>{spotDet.seassonality} </p>
                        
                        <div className="flex gap-4 mt-4">
                           <Link to="/"> <button  className="btn bg-[#00ffa6]">Go To  Home</button></Link>
                           <Link to="/myList"> <button  className="btn bg-[#00ffa6]">My List</button></Link>
                           
                            
                        </div>
                      

                    </div>
                    <div className="card shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">

                        <div className=" bg-gray-400 shadow-xl h-full w-full  rounded-xl">
                            <img  src={spotDet.photoUrl} alt="Book" className="rounded-xl w-full h-full" />

                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Detailspage;
