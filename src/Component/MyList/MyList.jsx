import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider.jsx/AuthProvider";
import { Link } from "react-router-dom";



const MyList = () => {
    const {user}=useContext(AuthContext);
    
    const [item,setItem]=useState([])
    const [control,setcontrol]=useState(false)
 
    useEffect(()=>{
        fetch(`http://localhost:5000/myList/${user?.email}`)
        .then(res=>res.json())
        .then(data =>{
            setItem(data)
        })
    },[user,control])
    const handelDelete = (id)=>{
        fetch(`http://localhost:5000/delete/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data =>{
            if(data.deletedCount>0)
            {setcontrol(!control)}
        })
    }
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2">
{
    item?.map( p=>(
        <div key={p._id}>
                    <div className="mb-8 lg:mx-8 md:-2">
        
        <div className="card h-[800px] glass">
          <figure>
            <img
              data-aos="fade-up"
              className="w-full h-48"
              src={p?.photoUrl || ''}
              alt="Tourist spot"
            />
          </figure>
          <div className="card-body">
            <h2 data-aos="fade-down-right" className="card-title font-bold text-3xl">{p?.countryName}</h2>
            <p>{p?.spotName}</p>
            <p>Location: {p?.location}</p>
            <p>Description: {p?.discription}</p>
            <p>Seasonality: {p?.seassonality}</p>
            <p>Average Cost: {p?.avarageCost}</p>
            <p>Travel Time: {p?.travelTime}</p>
            <p>Total Visitors Per Year: {p?.totalVisitorPerYear}</p>
            <p>User: {p?.userName} ({p?.email})</p>
            <div className="card-actions grid grid-cols-3">
            <Link to={`/detailsPage/${p._id}`}><button className="btn bg-[#00ffa6]">View Details</button></Link>
            <Link to={`/UpdatePost/${p._id}`}><button className="btn bg-[#00ffa6]">Update Spot</button></Link>
            <Link ><button onClick ={()=>handelDelete(p._id)}className="btn bg-[#00ffa6]">Delete Spot</button></Link>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
    )
}
        </div>
    );
};

export default MyList;