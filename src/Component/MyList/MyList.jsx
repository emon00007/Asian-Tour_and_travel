import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider.jsx/AuthProvider";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";
import { Helmet } from "react-helmet";


const MyList = () => {
    const { user } = useContext(AuthContext);

    const [item, setItem] = useState([])
    const [control, setcontrol] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:5000/myList/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setItem(data)
            })
    }, [user, control])
    const handelDelete = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) { setcontrol(!control) }
                if(data.insertedId)
                Swal.fire({
                    title: "Delete success",
                    text: "Do you want to continue",
                    icon: "success",
                    confirmButtonText: "Cool",
                });
            })
    }

    return (
        <div >
            <Helmet>MyList</Helmet>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                <h2 className="mb-4 text-2xl font-semibold leading-tight">Contacts</h2>
                <div className="overflow-x-auto">
                    <table className="w-full p-6 text-xs text-left whitespace-nowrap">
                        <colgroup>
                            <col className="w-5" />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-5" />
                        </colgroup>
                        <thead>
                            <tr className="dark:bg-gray-300">
                                
                                <th className="p-3">Country Name</th>
                                <th className="p-3">Job title</th>
                                <th className="p-3">Phone</th>
                                <th className="p-3">Email</th>
                                <th className="p-3">Location</th>
                                <th className="p-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        {
                            item?.map(p => (


                                <tbody key={p._id} className="border-b dark:bg-gray-50 dark:border-gray-300">
                                    <tr>
                                        
                                        <td className="px-3 py-2">
                                            <p>{p?.countryName}</p>
                                        </td>
                                        <td className="px-3 py-2">
                                            <span>UI Designer</span>
                                            <p className="dark:text-gray-600">Spirit Media</p>
                                        </td>
                                        <td className="px-3 py-2">
                                            <p>{p?.avarageCost} BDT</p>
                                        </td>
                                        <td className="px-3 py-2">
                                            <p>{p?.email}</p>
                                        </td>
                                        <td className="px-3 py-2">
                                            <p>{p?.spotName}</p>
                                            <p className="dark:text-gray-600">{p?.location}</p>
                                        </td>
                                        <td className="px-3 py-2">
                                        <Link to={`/detailsPage/${p?._id}`}>
                                            <button className="btn bg-[#00ffa6]">View Details</button>
                                        </Link>
                                        <Link ><button onClick ={()=>handelDelete(p._id)}className="btn bg-[#00ffa6]">Delete Spot</button></Link>
                                        </td>
                                    </tr>
                                   
                                </tbody>


                            )
                            )
                        }


                    </table>
                </div>
            </div>

        </div>
    );
};

export default MyList;