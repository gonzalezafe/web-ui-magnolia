import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { AddShoppingCart } from '@material-ui/icons';

// import { reducer } from '../config/Store1';

import accounting from 'accounting';
// import { actionTypes } from '../config/Store1';

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
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));



export default function Product({product}) {

  const dispatch = useDispatch()

  const { id, name, productType, image, price, description } = product;
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart({
      id,
      name,
      price
    }))
  }

  // console.log('>>>>>STATE',state)

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
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {productType}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to cart" onClick={addToCartHandler}>
          <AddShoppingCart fontSize='large' />  
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
