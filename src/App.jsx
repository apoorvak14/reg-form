import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    age: "",
    fatherName: "",
    motherName: "",
    city: "",
    state: "",
    country: "",
    college: "",
    semester: "",
    skills: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form submitted successfully");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Gender:</label><br />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label>Age:</label><br />
          <input
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Father's Name:</label><br />
          <input
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Mother's Name:</label><br />
          <input
            name="motherName"
            value={formData.motherName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>City:</label><br />
          <input
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>State:</label><br />
          <input
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Country:</label><br />
          <input
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>College:</label><br />
          <input
            name="college"
            value={formData.college}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Semester:</label><br />
          <input
            name="semester"
            value={formData.semester}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Skills:</label><br />
          <input
            name="skills"
            value={formData.skills}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
