import { useRef, useState } from "react";
import validationSchema from "../Utils/validationSchema";

function YupValidation() {
  const formRef = useRef(null);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const values = Object.fromEntries(formData.entries());
    values.skills = formData.getAll("skills");
    values.terms = values.terms == "on";

    // Manually structure nested fields
    values.address = {
      street: values["address.street"],
      city: values["address.city"],
      state: values["address.state"],
      zip: values["address.zip"],
    };

    // Remove flat fields after nesting
    delete values["address.street"];
    delete values["address.city"];
    delete values["address.state"];
    delete values["address.zip"];

    try {
      await validationSchema.validate(values, { abortEarly: false });
      console.log("Form Data:", values);
      setErrors({});
    } catch (err) {
      console.log("Error ::", err);
      const newError = {};
      err?.inner?.forEach((error) => {
        newError[error.path] = error.message;
      });
      setErrors(newError);
    }
  };

  return (
    <>
       <div className="border-1 border-gray-200 w-2xl p-10 rounded-lg mx-auto">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="grid gap-4 w-full align-center"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="border p-2 w-full"
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border p-2 w-full"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="border p-2 w-full"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="border p-2 w-full"
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword}</p>
            )}
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="border p-2 w-full"
            />
            {errors.phone && <p className="text-red-500">{errors.phone}</p>}
            <select name="gender" className="boder p-2 w-full">
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender && <p className="text-red-500">{errors.gender}</p>}
            <input type="date" name="dob" className="border p-2 w-full" />
            {errors.dob && <p className="text-red-500">{errors.dob}</p>}
            <input
              type="text"
              name="address.street"
              placeholder="Street/Gali/Mohalla"
              className="border p-2 w-full"
            />
            {errors.address?.street && (
              <p className="text-red-500">{errors.address?.street}</p>
            )}
            <input
              type="text"
              name="address.city"
              placeholder="City"
              className="border p-2 w-full"
            />
            {errors.address?.city && (
              <p className="text-red-500">{errors.address?.city}</p>
            )}
            <input
              type="text"
              name="address.state"
              placeholder="State"
              className="border p-2 w-full"
            />
            {errors.address?.state && (
              <p className="text-red-500">{errors.address?.state}</p>
            )}
            <input
              type="text"
              name="address.zip"
              placeholder="Pincode"
              className="border p-2 w-full"
            />
            {errors.address?.zip && (
              <p className="text-red-500">{errors.address?.zip}</p>
            )}
            <input
              type="text"
              name="country"
              placeholder="Country"
              className="border p-2 w-full"
            />
            {errors.country && <p className="text-red-500">{errors.country}</p>}
            <div className="flex gap-2">
              <label>Skills:</label>
              {["ReactJS", "NodeJS", "MongoDB", "Express"]?.map((skill) => (
                <label key={skill} className="block text-gray-500 ">
                  <input type="checkbox" name="skills" value={skill} /> {skill}
                </label>
              ))}
            </div>
            {errors.skills && <p className="text-red-500">{errors.skills}</p>}
            <input
              type="file"
              name="profilePicture"
              className="border p-2 w-full"
            />
            {errors.profilePicture && (
              <p className="text-red-500">{errors.profilePicture}</p>
            )}
            <input
              type="text"
              name="experience"
              placeholder="Experience in years"
              className="border p-2 w-full"
            />
            {errors.experience && (
              <p className="text-red-500">{errors.experience}</p>
            )}
            <label>
              <input type="checkbox" name="terms" /> I accept the terms and
              conditions.
            </label>
            {errors.terms && <p className="text-red-500">{errors.terms}</p>}
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Register
            </button>
          </form>
        </div>
    </>
  );
}

export default YupValidation;
