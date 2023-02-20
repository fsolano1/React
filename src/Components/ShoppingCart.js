import React from 'react'
import Button from '@mui/material/Button'
import ShoppingCartRounded from '@mui/icons-material/ShoppingCartRounded';



const ShoppingCart = () => {
  return (
    <div> 
      <Button variant="contained" startIcon={<ShoppingCartRounded />}>
       1      </Button>
  </div>
  )
}

export default ShoppingCart