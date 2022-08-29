import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import magnoLogo from '../assets/magnoLogo.png'
import { Badge } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { GoogleLogin, GoogleLogout } from 'react-google-login'

import { gapi } from 'gapi-script';
 

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




 function Navbar() {

  const [ profile, setProfile ] = useState([]);
  
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID


  useEffect(() => {
    const initClient = () => {
          gapi.client.init({
          clientId: clientId,
          scope: ''
        });
      };
      gapi.load('client:auth2', initClient);
  });
  

  const onSuccess = (res) => {
      setProfile(res.profileObj);
  };

  const onFailure = (err) => {
      console.log('failed', err);
  };

  const logOut = () => {
    setProfile(null);
};

  
  const classes = useStyles();

  const cartQuantity = useSelector(state => state.cart.totalQuantity)

  console.log('profile', profile)

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
          {profile.length !== 0 ? (
            <Typography variant="h6" color='textPrimary' component='p'>
              Hola {profile?.givenName.split(' ')[0]}
            </Typography>
          ) : (
            <Typography variant="h6" color='textPrimary' component='p'>
              Hola Invitado
            </Typography>
          )
          }
          <div className={classes.button} variant='filled'>
          {profile.length !== 0 ? (

            <GoogleLogout clientId={clientId} buttonText="Cerrar sesion" onLogoutSuccess={logOut} />
                
            ) : (
                <GoogleLogin
                    clientId={clientId}
                    buttonText="INICIAR SESIÓN"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            )}   
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

export default Navbar