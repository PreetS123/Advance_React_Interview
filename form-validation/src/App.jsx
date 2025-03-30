import { useRef } from "react";
import "./App.css";

function App() {
  const formRef = useRef(null);


  return (
    <>
      <div className="mx-auto h-screen  w-[80%]">
        <h1 className="text-2xl text-center my-10">Basic forms</h1>
        <div className="border-1 border-gray-200 h-full w-2xl p-10 rounded-lg mx-auto">
          <form ref={formRef}  className="grid gap-4 w-full align-center">
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="border p-2 w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border p-2 w-full"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="border p-2 w-full"
            />
            <input
              type="password"
              name="confirmpassword"
              placeholder="Confirm Password"
              className="border p-2 w-full"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="border p-2 w-full"
            />
            <select name="gender" className="boder p-2 w-full">
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <input type="date" name="dob" className="border p-2 w-full" />
            <input
              type="text"
              name="address.street"
              placeholder="Street/Gali/Mohalla"
              className="border p-2 w-full"
            />
            <input
              type="text"
              name="address.city"
              placeholder="City"
              className="border p-2 w-full"
            />
            <input
              type="text"
              name="address.state"
              placeholder="State"
              className="border p-2 w-full"
            />
            <input
              type="text"
              name="address.zip"
              placeholder="Pincode"
              className="border p-2 w-full"
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              className="border p-2 w-full"
            />
            <div>
              <label>Skills:</label>
              {["ReactJS", "NodeJS", "MongoDB", "Express"]?.map((skill) => {
                <label key={skill} className="block">
                  <input type="checkbox" name="skills" value={skill} /> {skill}
                </label>;
              })}
            </div>
            <input
              type="file"
              name="profilePicture"
              className="border p-2 w-full"
            />
            <input
              type="text"
              name="experience"
              placeholder="Experience in years"
              className="border p-2 w-full"
            />
            <label>
              <input type="checkbox" name="terms" /> I accept the terms and
              conditions.
            </label>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
