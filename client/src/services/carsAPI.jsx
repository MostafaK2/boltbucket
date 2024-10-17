// The base URL will now be relative to the proxy setup
const API_BASE_URL = "/api/customItem";

// Function to get all custom items (cars)
export const getAllCars = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}`);

    if (!response.ok) {
      throw new Error("Failed to fetch custom items");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching custom items:", error);
    throw error;
  }
};

// Function to get a single custom item by ID
export const getCar = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch custom item with ID ${id}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching custom item with ID ${id}:`, error);
    throw error;
  }
};

// Function to create a new custom item
export const createCar = async (carData) => {
  try {
    const response = await fetch(`${API_BASE_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(carData),
    });

    if (!response.ok) {
      throw new Error("Failed to create custom item");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating custom item:", error);
    throw error;
  }
};

// Function to update a custom item by ID
export const updateCar = async (id, updatedData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error(`Failed to update custom item with ID ${id}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error updating custom item with ID ${id}:`, error);
    throw error;
  }
};

// Function to delete a custom item by ID
export const deleteCar = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Failed to delete custom item with ID ${id}`);
    }

    return { message: "Custom item deleted successfully" };
  } catch (error) {
    console.error(`Error deleting custom item with ID ${id}:`, error);
    throw error;
  }
};
