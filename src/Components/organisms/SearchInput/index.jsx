import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SearchInput({value,onChange}) {

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField type="text" id="outlined-basic" label="Outlined" variant="outlined" value={value} onChange={(e) => onChange(e.target.value)} />
    </Box>
  );
}
