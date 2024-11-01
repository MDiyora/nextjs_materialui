"use client";

import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import SuccessAlert from "./SuccessAlert";
import { useState } from "react";
import { validateForm } from "@/app/helpers/validateForm";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(formData, setErrors)) {
      console.log("Registration Data:", formData);
      setSuccess(true);
      setFormData({ username: "", email: "", password: "" });
      setErrors({});
    } else {
      setSuccess(false);
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper
        elevation={3}
        style={{ padding: "32px", borderRadius: "10px", width: "100%" }}
      >
        <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
          <Typography
            component="h1"
            variant="h5"
            color="primary"
            fontWeight="bold"
          >
            Register
          </Typography>

          {success && <SuccessAlert message="Registered successfully!" />}
        </Box>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            label="Username"
            name="username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.username}
            onChange={handleChange}
            error={!!errors.username}
            helperText={errors.username}
          />
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: "24px", fontWeight: "bold", padding: "12px 0" }}
          >
            Register
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
