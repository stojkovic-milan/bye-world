import { Box, Button, Grid, Link, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";


const primary = blue[100];

const NotFound: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: primary,
      }}
    >
      <Typography variant="h1" style={{ color: 'white' }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: 'white' }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Link href="/">
        <Button variant="contained">Back Home</Button>
      </Link>
    </Box>
  );
};

export default NotFound;
