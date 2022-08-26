import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete'
import accounting from 'accounting';
import { useDispatch } from 'react-redux';
import { cartActions } from '../config/cart-slice';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  action: {
    marginTop: '1rem'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    textAlign: 'center',
  }
  
}));

const CheckoutCard = ({product}) => {
  const { id, name, image, price } = product;
  const classes = useStyles();

  const dispatch = useDispatch()

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id))
  }
  

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <Typography 
            className={classes.action}
            variant='h5'
            color='textSecondary'
          >
            {accounting.formatMoney(price, '$')}
          </Typography>
        }
        title={name}
        subheader="en Stock"
      />
      <CardMedia
        className={classes.media}
        image={image}
        title={name}
      />
      
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton onClick={removeItemHandler}>
          <DeleteIcon fontSize='large' />
        </IconButton>
        
      </CardActions>
      
    </Card>
  );
}

export default CheckoutCard
