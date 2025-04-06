import Link from "next/link";
import UserForm from "../components/UserForm";
import { Button } from "@mui/material";

const MyFormComp = () => {
  return (
    <div style={{ marginTop: "10px" }}>
      <UserForm />
      <Link href="/">
        <Button sx={{ mt: 4 }} variant="outlined">
          Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default MyFormComp;
