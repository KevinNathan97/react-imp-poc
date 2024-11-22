import React from "react";
import { Paper, Typography, List, ListItem, ListItemText } from "@mui/material";
import { Claim } from "../types/claim";

interface ClaimListProps {
  claims: Claim[];
}

const ClaimList: React.FC<ClaimListProps> = ({ claims }) => {
  return (
    <Paper elevation={3} style={{ padding: "16px" }}>
      <Typography variant="h6" gutterBottom>
        Submitted Claims
      </Typography>
      <List>
        {claims.map((claim, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`Policy: ${claim.policyNumber}`}
              secondary={`Reason: ${claim.claimReason} | Amount: $${claim.claimAmount}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default ClaimList;
