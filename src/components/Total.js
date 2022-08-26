import { Button, makeStyles } from '@material-ui/core'
import accounting from 'accounting'
import React from 'react'

import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20vh',
  },
  button: {
    marginTop: '2rem' 
  }
}))

const Total = () => {
    const classes = useStyles() 
    const cartQuantity = useSelector(state => state.cart.totalQuantity)

    const total = useSelector(state => state.cart.totalAmount)
    return (
        <div className={classes.root}>
            <h5>Cantidad de productos: {cartQuantity}</h5>
            <h5> {accounting.formatMoney(total, '$')} </h5>
            <Button className={classes.button} variant='contained' color='secondary'> Ir a Pagar </Button>
        </div>
    )
}

export default Total