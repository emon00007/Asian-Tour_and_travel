<div className="mb-8 mx-8">
<div className="card lg:w-96 md:w-96 glass">
  <figure>
    <img
      data-aos="fade-up"
      className="w-full h-48"
      src={photoUrl || ''}
      alt="Tourist spot"
    />
  </figure>
  <div className="card-body">
    <h2 data-aos="fade-down-right" className="card-title font-bold text-3xl">{countryName}</h2>
    <p>{spotName}</p>
    <p>Location: {location}</p>
    <p>Description: {discription}</p>
    <p>Seasonality: {seassonality}</p>
    <p>Average Cost: {avarageCost}</p>
    <p>Travel Time: {travelTime}</p>
    <p>Total Visitors Per Year: {totalVisitorPerYear}</p>
    <p>User: {userName} ({email})</p>
    <div className="card-actions justify-start">
    <button className="btn bg-[#00ffa6]">View Property</button>
    </div>
  </div>
</div>
</div>