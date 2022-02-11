import React, { useState } from 'react';
import { FormControl } from '@material-ui/core';
import { OutlinedInput } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { Select } from '@material-ui/core';

export default function AddSearchPage() {
    
   const[state,setState] = useState({})

   const style = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: 'white',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    
};

  return (
    <Container maxWidth="lg" style={style}>
    <div>  
    <br/>
    <Box color="white"><h2>CONTACT US, PLEASE PROVIDE YOUR DETAILS</h2></Box>
    <form>
    <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
      <OutlinedInput
        style={{ margin: '8px 3px 0 3px', color: 'white'}}
        inputProps={{ style: {color: 'white'}}}
        name='name'
        placeholder='Name'
      />
    </FormControl>
    <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
      <OutlinedInput
        style={{ flex: 1, margin: '10px 3px 0 3px', color: 'white'}}
        inputProps={{ style: {color: 'white'}}}
        name='phoneNumber'
        placeholder='Phone Number'
      />
    </FormControl>
    <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
      <OutlinedInput
        style={{ flex: 1, margin: '10px 3px 0 3px', color: 'white'}}
        inputProps={{ style: {color: 'white'}}}
        name='email'
        placeholder='Email ID'
      />
    </FormControl>
    <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
    <OutlinedInput
        style={{ flex: 1, margin: '10px 3px 0 3px', color: 'white'}}
        inputProps={{ style: {color: 'white'}}}
        name='gender'
        placeholder='Gender'
      />
    </FormControl>
     <br/>
    <FormControl fullWidth sx={{ m:1 }} variant="outlined">
  <InputLabel id="demo-simple-select-label">DISTANCE</InputLabel>
  <Select
    style={{ margin: '8px 3px 0 3px', color: 'white'}}
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Distance"
  >
    <MenuItem value={1}>1KM</MenuItem>
    <MenuItem value={2}>2KM</MenuItem>
    <MenuItem value={3}>3KM</MenuItem>
  </Select>
</FormControl>
<br/>
<FormControl fullWidth sx={{ m:1 }} variant="outlined">
  <InputLabel id="demo-simple-select-label">Board of Education</InputLabel>
  <Select
    style={{ margin: '8px 3px 0 3px', color: 'white'}}
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Board Of Education"
  >
    <MenuItem value={"CBSE"}>CBSE</MenuItem>
    <MenuItem value={"ICSE"}>ICSE</MenuItem>
    <MenuItem value={"STATE BOARD"}>STATE BOARD</MenuItem>
  </Select>
</FormControl>
<FormControl fullWidth sx={{ m: 1 }} variant="outlined">
      <OutlinedInput
        style={{ margin: '8px 3px 0 3px', color: 'white'}}
        inputProps={{ style: {color: 'white'}}}
        name='Free Range'
        placeholder='Desired Education Free Range'
      />
    </FormControl>
    <br/>
    <br/>
    <FormControl fullWidth sx={{ m: 1 }}>
    <Button variant="contained" color="primary"  type="submit">
         SEARCH
    </Button>
    </FormControl>
    </form>
    <br/>
    <br/>    
</div>
</Container>
  );
}
