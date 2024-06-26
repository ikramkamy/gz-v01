import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import logo from "../../assets/home/image.png"
export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        There are no Products with this filters! 
        <h1>Click here</h1>

      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
        
         <div className='w-full flex- justify-center items-center'> <img src={logo} alt="gaming zone"/></div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          We are offering the best Gaming experience ;)
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
           <Link to="/products">Products</Link>
          </Button>
          <Button onClick={handleClose} autoFocus>
            <Link to='/configurations' className='text-redPrimary'>Configurations</Link>
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}