import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
     
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
         <div className='bg-[#202020]'>
        <DialogTitle id="alert-dialog-title">
         <p className='text-redPrimary'>{"Warning !"}</p> 
        </DialogTitle>
        </div>
        <div className='bg-[#202020]'>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           <p className='text-[#707070]'>This product already exists in the shoping cart :)</p>
          </DialogContentText>
        </DialogContent>
        </div>
        <div className='bg-[#202020]'>
        <DialogActions>
          <Button onClick={handleClose} className='text-white'>Go back</Button>
          <Button onClick={handleClose} autoFocus>
            <Link to='/shopingcart' className='text-green-500 font-bold'>See It</Link>
          </Button>
        </DialogActions>
        </div>
      </Dialog>
    </React.Fragment>
  );
}