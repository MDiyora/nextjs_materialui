import { Alert } from "@mui/material";

export default function SuccessAlert({ message }) {
  return (
    <Alert severity="success" style={{ marginTop: "16px", width: "100%" }}>
      {message}
    </Alert>
  );
}
