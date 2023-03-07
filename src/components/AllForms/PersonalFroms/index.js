import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios from 'axios';


export default function PersonalForm(formData){


    const [formPersonalData, setFormPersonalData] = useState({});
    const [submit, setSubmit] = useState(0)
    const handleChange = (event) => {
        setFormPersonalData({
        ...formData,
        [event.target.name]: event.target.value
      });
    };
    console.log(formPersonalData)
    const handleSubmit = (event) => {
      event.preventDefault();
      setSubmit(1)
    };

    if(submit === 1){
      axios.post('http://localhost:5000/plug_mood/register', {
        "username":"test",
        "lastname":"test",
        "email":"test",
        "telephone":"test",
        "password":"test"
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => console.error(error));
    }

    return (
        <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            >
            <Typography component="h1" variant="h5">
              Persernal Information
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="Fname"
                    label="Frist Name"
                    name="Fnamw"
                    autoComplete="Fname"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="lName"
                    label="Last Name"
                    name="lName"
                    autoComplete="lName"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="tel"
                    label="Telephone"
                    id="tel"
                    onChange={handleChange}
                    autoComplete="tel"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    submit
                  </Button>
                </Grid>
              </Grid>
            </Box>
        </Box>
    );
}