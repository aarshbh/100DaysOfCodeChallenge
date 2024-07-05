import React from "react";

const PersonalInfo = ({ formData, errors, handleChange }) => {
  return (
    <div>
      <h2>Personal Information</h2>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <p>{errors.phone}</p>}
      </div>
    </div>
  );
};

export default PersonalInfo;
