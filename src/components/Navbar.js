import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import magnoLogo from '../assets/magnoLogo.png'
import { Badge, Button } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: '2rem',
  },
  appBar: {
    backgroundColor: 'whitesmoke',
    boxShadow: 'none',
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing(2),
  },
  image: {
    marginRight: '10px',
    height: '5rem',
  },
}));

export default function Navbar() {
  const classes = useStyles();

  const cartQuantity = useSelector(state => state.cart.totalQuantity)

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Link to='/'>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <img 
                src={magnoLogo} 
                className={classes.image} 
                alt='logo'
              />
            </IconButton>
          </Link>

          <div className={classes.grow}/>

          <Typography variant="h6" color='textPrimary' component='p'>
            Hola Invitado/a
          </Typography>
          <div className={classes.button} variant='filled'>
            <Button>
              <strong>Iniciar Sesión</strong>
            </Button>
            
            <Link to='checkout-page'>
              <IconButton aria-label='ir a la carta' color='inherit'>
                <Badge badgeContent={cartQuantity} color='secondary'>
                  <ShoppingCart fontSize='large' color='primary'/>
                </Badge>  
              </IconButton>
            </Link>
            
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
