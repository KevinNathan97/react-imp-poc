import React, { useState } from "react";
import { CssBaseline, Container, Typography } from "@mui/material";
import ClaimForm from "./components/ClaimForm";
import ClaimList from "./components/ClaimList";
import { Claim } from "./types/claim";

const App: React.FC = () => {
  const [claims, setClaims] = useState<Claim[]>([]);

  const handleNewClaim = (newClaim: Claim) => {
    setClaims((prevClaims) => [...prevClaims, newClaim]);
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography variant="h4" component="h1" gutterBottom>
          Claim Submission System
        </Typography>
        <ClaimForm onNewClaim={handleNewClaim} />
        <ClaimList claims={claims} />
      </Container>
    </>
  );
};

export default App;
