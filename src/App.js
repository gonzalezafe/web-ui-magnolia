import './App.css';
import CheckoutPage from './components/CheckoutPage';
// import CheckoutCard from './components/CheckoutCard'
import Navbar from './components/Navbar';
// import Product from './components/Product';
import Products from './components/Products';

import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element= {<Products />}/>
          <Route path='checkout-page' element= {<CheckoutPage/>}/>            
        </Routes>
      </div>
      </>
    </Router>  
  );
}

export default App;


