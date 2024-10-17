import React, { useEffect, useState } from "react";
import "../App.css";
import { getAllCars } from "../services/carsAPI"; // Ensure the getAllCars function is defined in CarsAPI

const ViewCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all cars when the component mounts
  useEffect(() => {
    getAllCars()
      .then((data) => {
        setCars(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching cars:", err);
        setError("Failed to load cars");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading cars...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="view-cars">
      <h1>Cars List</h1>
      <div className="car-grid">
        {cars.map((car) => (
          <div key={car.id} className="car-card">
            <h2>{car.name}</h2>
            <p>
              <strong>Exterior:</strong> {car.exterior} (${car.exteriorprice})
            </p>
            <p>
              <strong>Interior:</strong> {car.interior} (${car.interiorprice})
            </p>
            <p>
              <strong>Roof:</strong> {car.roof} (${car.roofprice})
            </p>
            <p>
              <strong>Wheels:</strong> {car.wheels} (${car.wheelsprice})
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewCars;
