import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Paper,
  Typography,
  CircularProgress,
} from "@mui/material";
import { Claim } from "../types/claim";
import { submitClaim } from "../services/api";

interface ClaimFormProps {
  onNewClaim: (claim: Claim) => void;
}

const ClaimForm: React.FC<ClaimFormProps> = ({ onNewClaim }) => {
  const [formData, setFormData] = useState<Claim>({
    policyNumber: "",
    claimReason: "",
    claimAmount: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const newClaim = await submitClaim({ ...formData, file });
      onNewClaim(newClaim);
      setFormData({ policyNumber: "", claimReason: "", claimAmount: "" });
      setFile(null);
      setLoading(false);
    } catch (error) {
      console.error("Error submitting claim:", error);
    } finally {
      alert("Form submitted successfully");
    }
  };

  return (
    <Paper elevation={3} style={{ padding: "16px", marginBottom: "24px" }}>
      <Typography variant="h6" gutterBottom>
        Submit a Claim
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Policy Number"
              name="policyNumber"
              value={formData.policyNumber}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Claim Reason"
              name="claimReason"
              value={formData.claimReason}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Claim Amount"
              name="claimAmount"
              value={formData.claimAmount}
              onChange={handleChange}
              fullWidth
              type="number"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <input type="file" onChange={handleFileChange} required />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : "Submit Claim"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default ClaimForm;
