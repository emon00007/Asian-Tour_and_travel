import { useState } from "react";
import { Helmet } from "react-helmet";
import {  useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from 'sweetalert2'
const UpdatePost = () => {
    const { id } = useParams(); 
    // const [updatepost, setUpdatePost] = useState({});
    const [availableSpots, setAvailableSpots] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    
    // useEffect(() => {
        
    //         .then(res => res.json())
    //         .then(data => {
    //             setUpdatePost(data);
    //             console.log(data);
    //         });
    // }, [id]); 


    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
        // Set available spots based on the selected country
        switch (e.target.value) {
            case "Bangladesh":
                setAvailableSpots([
                    "Sundarban",
                    "Cox’s Bazar",
                    "Rangamati",
                    "Bandarban",
                    "Saint Martin’s Island",
                ]);
                break;
            case "Thailand":
                setAvailableSpots([
                    "Bangkok",
                    "Chiang Mai",
                    "Ayutthaya",
                    "Phuket",
                    "Phi Phi Islands",
                ]);
                break;
            case "Indonesia":
                setAvailableSpots([
                    "Bali",
                    "Borobudur Temple",
                    "Komodo National Park",
                    "Raja Ampat Islands",
                    "Yogyakarta",
                ]);
                break;
            case "Malaysia":
                setAvailableSpots([
                    "Kuala Lumpur",
                    "Langkawi",
                    "Penang",
                    "Cameron Highlands",
                    "Taman Negara National Park",
                ]);
                break;
            case "Vietnam":
                setAvailableSpots([
                    "Ha Long Bay",
                    "Ho Chi Minh City",
                    "Hoi An Ancient Town",
                    "Phong Nha Caves",
                    "Mekong Delta",
                ]);
                break;
            case "Cambodia":
                setAvailableSpots([
                    "Angkor Wat",
                    "Siem Reap",
                    "Phnom Penh",
                    "Kep",
                    "Bokor National Park",
                ]);
                break;
            default:
                setAvailableSpots([]);
        }
    };

      const handelUpdate =e=> {
        e.preventDefault();
        const form = e.target;

        const spotName = form.spotName.value;
 

        const countryName = form.countryName.value;
        const seassonality = form.seassonality.value;
        const location = form.location.value;
        const discription = form.discription.value;
        const avarageCost = form.avarageCost.value;
        const travelTime = form.travelTime.value;
        const totalVisitorPerYear = form.totalVisitorPerYear.value;
        const photoUrl = form.photoUrl.value;
        const updatePost = {
        
            spotName,
            countryName,
            seassonality,
            location,
            discription,
            avarageCost,
            travelTime,
            totalVisitorPerYear,
            photoUrl,
        };
        console.log(updatePost)
        fetch(`https://ashan-tour-and-travel-server.vercel.app/updatePost/${id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatePost)

        })
        .then(res=>res.json())
        .then(data=>{console.log(data)
            if(data.insertedId)
            toast.success("Update successful!");
            Swal.fire({
                title: "success",
                text: "Do you want to continue",
                icon: "success",
                confirmButtonText: "Cool",
            });
            
        })
        e.target.reset()
    }
    return (
        <div>
            <Helmet>UpdatePage</Helmet>
        <div className="p-10">
              <form
               onSubmit={handelUpdate}
                  className="bg-[#FFFF] shadow-lg rounded-lg mt-8 p-4"
              >
                  <h1 className="font-bold text-4xl text-center ">
                      Add Spot where you visit
                  </h1>

                  <div className="md:flex gap-6 ">
                      <div className="md:w-1/2 p-4">
                          <label className="label">
                              <span className="font-bold">Country Name</span>
                          </label>
                          <div className="join w-full">
                              <select
                                  className="input input-bordered join-item w-full"
                                  onChange={handleCountryChange}
                                  name="countryName"
                                  // onChange={handleCountryChange}
                                  required
                              >
                                  <option value="">Select country</option>
                                  <option value="Bangladesh">Bangladesh</option>
                                  <option value="Thailand">Thailand</option>
                                  <option value="Indonesia">Indonesia</option>
                                  <option value="Malaysia">Malaysia</option>
                                  <option value="Vietnam">Vietnam</option>
                                  <option value="Cambodia">Cambodia</option>
                              </select>
                          </div>
                      </div>
                      <div className="md:w-1/2 p-4">
                          <label className="label">
                              <span className="font-bold">Spot Name</span>
                              
                          </label>
                          <div className="join w-full">
                              <select
                                  className="input input-bordered join-item w-full"
                                  name="spotName"
                                  required
                              >
                                  <option value="">Select spot</option>
                                  {availableSpots.map((spot) => (
                                        <option key={spot} value={spot}>
                                            {spot}
                                        </option>
                                    ))}
                                  
                              </select>
                          </div>
                      </div>
                  </div>
                  {/* form supply */}
                  <div className="md:flex gap-6 ">
                      <div className="md:w-1/2 p-4">
                          <label className="label">
                              <span className="font-bold">Location</span>
                          </label>
                          <div className="join w-full">
                              <input
                                  className="input input-bordered join-item w-full"
                                  name="location"
                                  placeholder="location"
                                  type="text"
                                  required
                              />
                          </div>
                      </div>
                      <div className="md:w-1/2 p-4">
                          <label className="label">
                              <span className="font-bold">short description</span>
                          </label>
                          <div className="join w-full">
                              <input
                                  className="input input-bordered join-item w-full"
                                  name="discription"
                                  placeholder="discription"
                                  type="text"
                                  required
                              />
                          </div>
                      </div>
                  </div>
                  {/* form Category */}
                  <div className="md:flex gap-6 ">
                      <div className="md:w-1/2 p-4">
                          <label className="label">
                              <span className="font-bold">Avarage Cost</span>
                          </label>
                          <div className="join w-full">
                              <input
                                  className="input input-bordered join-item w-full"
                                  name="avarageCost"
                                  placeholder="avarageCost"
                                  type="number"
                                  required
                              />
                          </div>
                      </div>
                      <div className="md:w-1/2 p-4">
                          <label className="label">
                              <span className="font-bold">Seassonality</span>
                          </label>
                          <div className="join w-full">
                              <input
                                  className="input input-bordered join-item w-full"
                                  name="seassonality"
                                  placeholder="seassonality"
                                  type="text"
                                  required
                              />
                          </div>
                      </div>
                  </div>
                  <div className="md:flex gap-6 ">
                      <div className="md:w-1/2 p-4">
                          <label className="label">
                              <span className="font-bold">Travel_time</span>
                          </label>
                          <div className="join w-full">
                              <input
                                  className="input input-bordered join-item w-full"
                                  name="travelTime"
                                  placeholder="travelTime"
                                  type="days"
                                  required
                              />
                          </div>
                      </div>
                      <div className="md:w-1/2 p-4">
                          <label className="label">
                              <span className="font-bold">TotalVisitorPerYear</span>
                          </label>
                          <div className="join w-full">
                              <input
                                  className="input input-bordered join-item w-full"
                                  name="totalVisitorPerYear"
                                  placeholder="totalVisitorPerYear"
                                  type="text"
                                  required
                              />
                          </div>
                      </div>
                  </div>
                  <div className="w-full p-4">
                      {" "}
                      <label className="label">
                          <span className="font-bold">PhotoUrl</span>
                      </label>
                      <input
                          className="input input-bordered join-item w-full mb-4"
                          name="photoUrl"
                          placeholder="Photo Url"
                          type="text"
                      />
                     
                    
                      <input 
                          type="submit"
                          value="Add Tourist Spot"
                          className="btn text-black hover:text-white bg-[#00ffa6] w-full"
                      />
                     
                  </div>
              </form>
          </div>  
      </div>
    );
};

export default UpdatePost;
