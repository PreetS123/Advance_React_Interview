"use client";

import { Alert, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../reduxStore";
import { addSubmission } from "../reduxStore/formSlice";

interface formData {
  name: string;
  email: string;
}

const UserForm = () => {
  const dispatch= useDispatch<AppDispatch>();
  const [formData, setFormData] = useState<formData>({ name: "", email: "" });
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setError("Both field are required.");
      setSubmitted(false);
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please enter a valid email");
      setSubmitted(false);
      return;
    }

    console.log("sumitted", formData);
    dispatch(addSubmission(formData));

  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <Typography variant="h5">User Form</Typography>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            label="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {error && <Alert severity="error">{error}</Alert>}
          {submitted && <Alert>Form submitted successfully</Alert>}
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default UserForm;
