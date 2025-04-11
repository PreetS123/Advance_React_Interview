"use client"
import Link from "next/link";
import UserForm from "../components/UserForm";
import { Button, List, ListItem, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../reduxStore";

const MyFormComp = () => {
  const formData = useSelector((store: RootState) => store.form.submittedData);
  return (
    <div style={{ marginTop: "10px" }}>
      <UserForm />
      {formData.length > 0 ? (
        <Stack mt={4} spacing={1}>
          <Typography variant="h6">Submissions:</Typography>
          {formData?.map((data, i) => (
            <Typography key={i}>
              👤 {data.name}, 📧 {data.email}, 📱 {data.phone}, 🎂 {data.age}, 🧠 {data.gender}
            </Typography>
          ))}
        </Stack>
      ) : (
        <Typography>No data found</Typography>
      )}
      <Link href="/">
        <Button sx={{ mt: 4 }} variant="outlined">
          Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default MyFormComp;
