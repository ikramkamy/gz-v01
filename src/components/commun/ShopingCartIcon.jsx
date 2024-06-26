import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEcommerceStore } from '../stores/EcommerceStore';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function CustomizedBadges() {
    const{productsList}=useEcommerceStore((state)=>state)
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={productsList.length} color="primary">
        <ShoppingCartIcon color='warning'/>
      </StyledBadge>
    </IconButton>
  );
}