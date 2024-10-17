import React, { useState } from "react";
import "../App.css";
import { createCar } from "../services/carsAPI"; // Make sure the createCar function is defined in CarsAPI

const CreateCar = () => {
  const [formData, setFormData] = useState({
    name: "",
    exterior: "",
    exteriorPrice: "",
    interior: "",
    interiorPrice: "",
    roof: "",
    roofprice: "",
    wheels: "",
    wheelsprice: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear error before submitting
    try {
      await createCar(formData);
      setMessage("Car created successfully!");
      setFormData({
        name: "",
        exterior: "",
        exteriorPrice: "",
        interior: "",
        interiorPrice: "",
        roof: "",
        roofprice: "",
        wheels: "",
        wheelsprice: "",
      }); // Reset form fields
    } catch (error) {
      setError("Failed to create car. Please try again.");
      console.error("Error creating car:", error);
    }
  };

  return (
    <div className="create-car">
      <h1>Create New Car</h1>
      <form onSubmit={handleSubmit} className="car-form">
        <div className="form-group">
          <label>Car Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Exterior:</label>
          <input
            type="text"
            name="exterior"
            value={formData.exterior}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Exterior Price:</label>
          <input
            type="number"
            name="exteriorPrice"
            value={formData.exteriorPrice}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Interior:</label>
          <input
            type="text"
            name="interior"
            value={formData.interior}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Interior Price:</label>
          <input
            type="number"
            name="interiorPrice"
            value={formData.interiorPrice}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Roof:</label>
          <input
            type="text"
            name="roof"
            value={formData.roof}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Roof Price:</label>
          <input
            type="number"
            name="roofprice"
            value={formData.roofprice}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Wheels:</label>
          <input
            type="text"
            name="wheels"
            value={formData.wheels}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Wheels Price:</label>
          <input
            type="number"
            name="wheelsprice"
            value={formData.wheelsprice}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Create Car</button>
      </form>

      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default CreateCar;
