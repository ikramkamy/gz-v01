import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import logo from "../../assets/home/image.png";
import { Link } from 'react-router-dom';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs({name}) {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
        
    {/* {  <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>} */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
         <div className='bg-[#202020]'>
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        <p className=' mt-10 text-redPrimary'>Your <span className='font-bold'> {name}</span> has been added succesfully !</p>  
        </DialogTitle>
        </div>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        
        </IconButton>
       
        <div className='flex justify-center bg-[#202020] items-center w-full h-full text-redPrimary'>
        <svg 
        
        className='h-[20vh]'
        xmlns="http://www.w3.org/2000/svg" width="113.225" height="57.357" viewBox="0 0 113.225 57.357">
  <g id="Groupe_1" data-name="Groupe 1" transform="translate(0 0)">
    <g id="Groupe_1-2" data-name="Groupe 1" transform="translate(0)">
      <path id="Tracé_1" data-name="Tracé 1" d="M7241.093,2173.678l-9.592-9.592V2143.1l9.721-9.721H7343.9l-31.274,25.2h32.1l-20.56,15.094Z" transform="translate(-7231.5 -2133.383)" fill="#ca2026"/>
      <path id="Tracé_2" data-name="Tracé 2" d="M7321.981,2174.416l31.274-25.2h-97.192l-8.732,8.732v19.583l8.6,8.6h81.82l15.959-11.717Z" transform="translate(-7245.643 -2147.526)"/>
      <path id="Tracé_3" data-name="Tracé 3" d="M7314.678,2169h-40.063l-7.5,7.5v17.834l7.367,7.366h31.275l8.917-7.366v-11.487h-31.146l9.563,7.351h8.917v3.748h-23.391V2176.11h27.484Z" transform="translate(-7263.32 -2165.203)" fill="#fff"/>
      <path id="Tracé_4" data-name="Tracé 4" d="M7728.2,2169l-31.275,25.2H7728.2l-10.21,7.5h-43.745l30.992-25.523-31.495.019,8.58-7.192Z" transform="translate(-7626.568 -2165.203)" fill="#fff"/>
      <path id="Tracé_5" data-name="Tracé 5" d="M7676.312,2199.407" transform="translate(-7628.866 -2192.365)" fill="#fff"/>
    </g>
    <g id="Groupe_4" data-name="Groupe 4" transform="translate(0 49.41)">
      <g id="Groupe_2" data-name="Groupe 2" transform="translate(68.874 0.166)">
        <path id="Tracé_6" data-name="Tracé 6" d="M8199.818,2601.347h8.066v1.5h-8.056v1.521h8.3v1.6H8198c0-.03-.008-.057-.008-.083,0-1.675-.01-3.351.007-5.026a2.524,2.524,0,0,1,2.4-2.618,4.59,4.59,0,0,1,.485-.027q3.521,0,7.044,0h.193v1.613h-.19q-3.428,0-6.857,0a1.854,1.854,0,0,0-.464.053,1.06,1.06,0,0,0-.793,1.027C8199.81,2601.054,8199.818,2601.193,8199.818,2601.347Z" transform="translate(-8163.776 -2598.214)" fill="#fff"/>
        <path id="Tracé_7" data-name="Tracé 7" d="M7887.237,2606.068h-10.03a13.074,13.074,0,0,1,.077-1.428,1.872,1.872,0,0,1,.973-1.326c.621-.365,1.259-.7,1.9-1.035,1.421-.744,2.847-1.478,4.271-2.217a.294.294,0,0,0,.137-.127h-7.21v-1.614h9.9a5.141,5.141,0,0,1-.137,1.7,2.005,2.005,0,0,1-.888,1.041c-.693.4-1.4.773-2.106,1.144-1.357.711-2.719,1.412-4.078,2.117a.32.32,0,0,0-.142.126h7.336Z" transform="translate(-7877.207 -2598.304)" fill="#fff"/>
        <path id="Tracé_8" data-name="Tracé 8" d="M7982.37,2605.987c0-.055-.006-.088-.006-.121,0-1.67-.009-3.34.006-5.01a2.524,2.524,0,0,1,2.394-2.607c.172-.017.346-.028.52-.028q3.68,0,7.362,0h.208c0,.047.007.079.007.112,0,1.658,0,3.317,0,4.976a2.808,2.808,0,0,1-.384,1.442,2.471,2.471,0,0,1-1.937,1.2,6.544,6.544,0,0,1-.771.035q-3.59,0-7.179,0Zm8.671-6.137a.391.391,0,0,0-.066-.015c-1.855,0-3.71,0-5.564,0a1.179,1.179,0,0,0-.956.449,1.376,1.376,0,0,0-.27.882c0,1.025,0,2.051,0,3.076,0,.038,0,.075.008.127h.981c1.519,0,3.037,0,4.556,0a1.176,1.176,0,0,0,1.286-1.12,10.157,10.157,0,0,0,.025-1.158C7991.043,2601.35,7991.041,2600.6,7991.041,2599.85Z" transform="translate(-7971.146 -2598.214)" fill="#fff"/>
        <path id="Tracé_9" data-name="Tracé 9" d="M8100.157,2604.318v-6.141h1.816v7.755h-.183c-.56,0-1.122-.024-1.681.005a2.383,2.383,0,0,1-2.114-1.048q-1.792-2.341-3.589-4.678a.91.91,0,0,0-.737-.431v6.142h-1.815v-7.757h.178c.589,0,1.178.019,1.765,0a2.253,2.253,0,0,1,1.965.962q1.841,2.387,3.674,4.781A.9.9,0,0,0,8100.157,2604.318Z" transform="translate(-8068.96 -2598.159)" fill="#fff"/>
      </g>
      <g id="Groupe_3" data-name="Groupe 3" transform="translate(0 0)">
        <path id="Tracé_10" data-name="Tracé 10" d="M7466.582,2597.721v7.788h-2.154v-5.879a.6.6,0,0,0-.591.371q-.579,1.191-1.164,2.379c-.486,1-.974,1.99-1.456,2.987a.231.231,0,0,1-.245.158q-1-.011-2,0a.232.232,0,0,1-.245-.158q-1.292-2.661-2.591-5.319a.627.627,0,0,0-.611-.419v5.879h-2.154v-7.774a1.251,1.251,0,0,1,.134-.013c.793,0,1.587-.013,2.38,0a2.028,2.028,0,0,1,1.641.705,3.3,3.3,0,0,1,.371.6c.664,1.343,1.319,2.689,1.978,4.034.026.054.055.107.095.186.04-.076.07-.131.1-.187.658-1.345,1.333-2.682,1.968-4.038a2.137,2.137,0,0,1,2.095-1.308c.757,0,1.514,0,2.271,0Z" transform="translate(-7429.709 -2597.598)" fill="#fff"/>
        <path id="Tracé_11" data-name="Tracé 11" d="M7630.493,2605.519c-.924,0-1.839.029-2.752-.009a2.06,2.06,0,0,1-1.627-1.022q-1.505-2.206-3.009-4.412a.809.809,0,0,0-.649-.43v5.883H7620.3v-7.787h.385c.66,0,1.319.006,1.978,0a2.275,2.275,0,0,1,2.024,1.065q1.494,2.2,3,4.4a.829.829,0,0,0,.654.438v-5.888h2.151Z" transform="translate(-7578.831 -2597.619)" fill="#fff"/>
        <path id="Tracé_12" data-name="Tracé 12" d="M7737.549,2605.551h-10.194c0-.053-.01-.105-.01-.157,0-1.617,0-3.235,0-4.853a3.123,3.123,0,0,1,.229-1.214,2.459,2.459,0,0,1,2.086-1.533,5.969,5.969,0,0,1,.785-.039q3.433,0,6.866,0h.234v1.9h-.211q-3.313,0-6.628,0a1.715,1.715,0,0,0-.572.092.923.923,0,0,0-.619.91c-.021.987-.007,1.976-.007,2.976h5.885v-2.25h2.154Z" transform="translate(-7674.455 -2597.632)" fill="#fff"/>
        <path id="Tracé_13" data-name="Tracé 13" d="M7241.7,2597.754v1.9h-.218q-3.3,0-6.593,0a2.214,2.214,0,0,0-.4.034.93.93,0,0,0-.8.889c-.028.7-.021,1.4-.027,2.1,0,.315,0,.632,0,.956h5.877v-2.253h2.16v4.156h-10.2v-.2q0-2.316,0-4.633a3.628,3.628,0,0,1,.185-1.26,2.46,2.46,0,0,1,2.146-1.66,6.159,6.159,0,0,1,.8-.038q3.416,0,6.831,0Z" transform="translate(-7231.5 -2597.632)" fill="#fff"/>
        <path id="Tracé_14" data-name="Tracé 14" d="M7347.1,2604.521h-2.2c-.208-.5-.424-1.005-.624-1.514a.225.225,0,0,0-.254-.165q-2.8.006-5.6,0a.213.213,0,0,0-.239.157c-.184.47-.38.936-.581,1.4-.022.054-.091.125-.139.125-.7.008-1.391.006-2.1.006.018-.058.029-.1.047-.145q1.191-2.874,2.387-5.748a3.53,3.53,0,0,1,.876-1.354,2.65,2.65,0,0,1,1.533-.62,8.872,8.872,0,0,1,2.245.028,2.364,2.364,0,0,1,1.877,1.269c.347.689.64,1.405.94,2.117.6,1.413,1.178,2.831,1.766,4.247C7347.042,2604.385,7347.065,2604.446,7347.1,2604.521Zm-3.636-3.478c-.3-.693-.576-1.373-.882-2.04a.748.748,0,0,0-.667-.449c-.431-.019-.865-.036-1.3-.014a.937.937,0,0,0-.871.672c-.036.1-.081.19-.12.286-.21.511-.42,1.021-.636,1.546Z" transform="translate(-7324.269 -2596.606)" fill="#fff"/>
        <path id="Tracé_15" data-name="Tracé 15" d="M7590.818,2605.668h-2.14v-7.778h2.14Z" transform="translate(-7550.58 -2597.753)" fill="#fff"/>
      </g>
    </g>
  </g>
</svg>
          
          
          
          
          
          
          
          </div>
          <div className='bg-[#202020]'>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
           <Link to='/shopingcart' className='text-green-500'> See your Shoping Cart</Link> 
          </Button>
        </DialogActions>
        </div>
      </BootstrapDialog>
    
    </React.Fragment>
  );
}