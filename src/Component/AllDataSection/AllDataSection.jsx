import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLoaderData } from 'react-router-dom';

const AllDataSection = () => {
    const cards = useLoaderData();
    const [sortBy, setSortBy] = useState('lowCost'); // Default sorting option

    // Function to sort the cards based on the selected sorting option
    const sortCards = () => {
        if (sortBy === 'lowCost') {
            return cards.slice().sort((a, b) => a.avarageCost - b.avarageCost);
        } else if (sortBy === 'highCost') {
            return cards.slice().sort((a, b) => b.avarageCost - a.avarageCost);
        }
    };

    // Handle sorting option change
    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    const sortedCards = sortCards();

    return (
        <div>
            <Helmet>AllDataSection</Helmet>
            <div className="mt-5 text-center">
                
                <select value={sortBy} onChange={handleSortChange} className="rounded-md border border-gray-300 p-2">
                    <option value="lowCost">Low Cost</option>
                    <option value="highCost">High Cost</option>
                </select>
            </div>
            
            <div className="mt-5 grid lg:grid-cols-3 md:grid-cols-2">
                {/* Display sorted cards */}
                {sortedCards.map(card => (
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
                                        <Link to={`/detailsPage/${card._id}`}>
                                            <button className="btn bg-[#00ffa6]">View Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllDataSection;
