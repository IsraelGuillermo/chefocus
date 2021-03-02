import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography variant="h1" component="h2" gutterBottom>
          h1. Heading
        </Typography>
        <Typography variant="h4" gutterBottom>
          Ingredients
        </Typography>
        <Typography variant="body1" gutterBottom>
          TEsting for all Ingredients
        </Typography>
        <Typography variant="h4" gutterBottom>
          Instructions
        </Typography>
        <Typography variant="body1" gutterBottom>
          Setting list of instructions here
        </Typography>
        <img src="https://images.unsplash.com/photo-1612392061787-2d078b3e573c?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80" />
      </Container>
    </React.Fragment>
  );
}
