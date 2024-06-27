import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export default function IntroDivider({name, price, }) {
  return (
   
        <div className='bg-redPrimary text-white max-md:mt-2 w-1/4'>
      <Box sx={{ p: 2 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            DZD {price}
          </Typography>
        </Stack>
        <Typography color="text.warrning" variant="body2">
          Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
          just down the hall.
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Typography gutterBottom variant="body2">
          type
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip color="primary" label="Select" size="small" />
          {/* <Chip label="Medium" size="small" />
          <Chip label="Hard" size="small" /> */}
        </Stack>
      </Box>
      </div>
   
  );
}
