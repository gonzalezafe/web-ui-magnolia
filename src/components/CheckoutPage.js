import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import CheckoutCard from './CheckoutCard'
import Total from './Total'

// import { reducer } from '../config/Store1';

import { useSelector } from 'react-redux'




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '2rem',
  }
}))

const CheckoutPage = () => {
  const classes = useStyles()

  //const dispatch = useDispatch()

  // const cartQuantity = useSelector(state => state.cart.totalQuantity)

  const cartItems = useSelector(state => state.cart.items)

  console.log('basket', cartItems)

    function FormRow() {
        return(
            <>
                {cartItems.map((item) =>(
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <CheckoutCard key={item.id} product={item}/>
                  </Grid>
                ))}
            </>
        )
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography align='center' gutterBottom variant='h4'>
                    Carrito de compra
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8} md={9} container spacing={2}>
                <FormRow/>
              </Grid>
              <Grid item xs={12} sm={4} md={3}>
                <Typography align='center' gutterBottom variant='h4'>
                    <Total/>
                </Typography>
              </Grid>
            </Grid>
        </div>
    )
}

export default CheckoutPage