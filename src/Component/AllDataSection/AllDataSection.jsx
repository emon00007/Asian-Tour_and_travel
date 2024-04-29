import { Link, useLoaderData } from 'react-router-dom';

const AllDataSection = () => {
    const cards = useLoaderData()
    return (
        <div className=" mt-5 grid lg:grid-cols-3 md:grid-cols-2">
                            {Array.isArray(cards) && cards.map(card => (
                    <div key={card._id}>


                        <div className="mb-8 lg:mx-8 md:-2">

                            <div className="card h-[800px] glass">
                                <figure>
                                    <img
                                        data-aos="fade-up"
                                        className="w-full h-48"
                                        src={card?.photoUrl || ''}
                                        alt="Tourist spot"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 data-aos="fade-down-right" className="card-title font-bold text-3xl">{card?.countryName}</h2>
                                    <p>{card?.spotName}</p>
                                    <p>Location: {card?.location}</p>
                                    <p>Description: {card?.discription}</p>
                                    <p>Seasonality: {card?.seassonality}</p>
                                    <p>Average Cost: {card?.avarageCost}</p>
                                    <p>Travel Time: {card?.travelTime}</p>
                                    <p>Total Visitors Per Year: {card?.totalVisitorPerYear}</p>
                                    <p>User: {card?.userName} ({card?.email})</p>
                                    <div className="card-actions grid grid-cols-3">
                                        <Link to={`/detailsPage/${card._id}`}><button className="btn bg-[#00ffa6]">View Details</button></Link>
                                        {/* <Link to={`/UpdatePost/${p._id}`}><button className="btn bg-[#00ffa6]">Update Spot</button></Link> */}
                                        {/* <Link ><button onClick ={()=>handelDelete(p._id)}className="btn bg-[#00ffa6]">Delete Spot</button></Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                ))
                }
        </div>
    );
};

export default AllDataSection;