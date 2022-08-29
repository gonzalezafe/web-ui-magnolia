import './App.css';
import CheckoutPage from './components/CheckoutPage';
// import CheckoutCard from './components/CheckoutCard'
import Navbar from './components/Navbar';
// import Product from './components/Product';
import Products from './components/Products';

import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Checkout from './components/CheckoutForm/Checkout';



function App() {

  

  return (
    <Router>
      <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element= {<Products />}/>
          <Route path='/checkout-page' element= {<CheckoutPage/>}/>
          <Route path='/signin' element= {<SignIn/>}/>
          <Route path='/signup' element= {<SignUp/>}/>
          <Route path='/checkout' element= {<Checkout/>}/>
        </Routes>
      </div>
      </>
    </Router>  
  );
}

export default App;


