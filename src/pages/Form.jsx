import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    productName: "",
    category: "",
    description: "",
    minPrice: "",
    maxPrice: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    // The only change is adding "h-screen" to this div
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Product Form
        </h2>

        {/* Product Name */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Product Name</label>
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            placeholder="Enter product name"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
            required
          />
        </div>

        {/* Product Category */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Product Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
            required
          >
            <option value="">-- Select Category --</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="grocery">Grocery</option>
            <option value="furniture">Furniture</option>
          </select>
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter product description"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
            rows="4"
            required
          />
        </div>

        {/* Price Range */}
        <div className="mb-4 flex space-x-4">
          <div className="w-1/2">
            <label className="block text-gray-700 mb-2">Min Price</label>
            <input
              type="number"
              name="minPrice"
              value={formData.minPrice}
              onChange={handleChange}
              placeholder="Min"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
              required
            />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-700 mb-2">Max Price</label>
            <input
              type="number"
              name="maxPrice"
              value={formData.maxPrice}
              onChange={handleChange}
              placeholder="Max"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
              required
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;