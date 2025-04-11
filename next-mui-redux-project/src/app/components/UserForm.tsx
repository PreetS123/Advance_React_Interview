"use client";

import { Alert, Button, Stack, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../reduxStore";
import { addSubmission, UserFormData } from "../reduxStore/formSlice";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schemas = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
    .required("Phone number is required"),
  age: yup
    .number()
    .typeError("Age must be number")
    .min(18, "Minimum age is 18")
    .max(60, "Max age is 60")
    .required("Age is required."),
  password: yup
    .string()
    .min(6, "Must be of 6 digits")
    .required("Password is required"),
  gender: yup
    .string()
    .oneOf(["male", "female", "other"], "select gender")
    .required("Gender is required"),
});

const UserForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<UserFormData>({
    resolver: yupResolver(schemas),
  });

  const onSubmit = (data: UserFormData) => {
    console.log("sumitted", data);
    dispatch(addSubmission(data));
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack spacing={2}>
          <Typography variant="h5">User Form</Typography>
          <TextField
            label="Name"
            {...register("name")}
            helperText={errors?.name?.message}
            error={!errors.name}
          />
          <TextField
            label="email"
            {...register("email")}
            error={!errors.email}
            helperText={errors?.email?.message}
          />
          <TextField
            label="Phone number"
            {...register("phone")}
            error={!errors.phone}
            helperText={errors?.phone?.message}
          />
          <TextField
            label="age"
            {...register("age")}
            error={!errors.age}
            helperText={errors.age?.message}
          />
          <TextField
            label="password"
            {...register("password")}
            error={!errors.password}
            helperText={errors?.password?.message}
          />
          <Stack direction={'row'} spacing={2}>
            <Typography>Gender:</Typography>
            <label>
              <input type='radio' value='male' {...register('gender')}/>
              Male
            </label>
            <label>
              <input type='radio' value='female' {...register('gender')}/>
              Female
            </label>
            <label>
              <input type='radio' value='other' {...register('gender')}/>
              Other
            </label>
          </Stack>
          {errors.gender && <Typography color="error">{errors.gender.message}</Typography>}
          {isSubmitSuccessful && <Alert>Form submitted successfully</Alert>}
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default UserForm;
