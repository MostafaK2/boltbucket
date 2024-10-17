import React, { useEffect, useState } from "react";
import { getCar } from "../services/carsAPI"; 

const CarDetails = ({ carId }) => {
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch car details by ID
  useEffect(() => {
    if (carId) {
      getCar(carId)
        .then((data) => {
          setCar(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching car details:", err);
          setLoading(false);
        });
    }
  }, [carId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!car) {
    return <div>Car details not found</div>;
  }

  return (
    <div className="car-details">
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
  );
};

export default CarDetails;
