import './App.css';
import { Header } from './Components/Header';
import { Shop } from './Components/Shop';
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import OrderReview from './Components/OrderReview';
import Error from './Components/Error';
import Manage from './Components/Manage';
import Login from './Components/login/Login';

import ProductDetails from './Components/productDetails/ProductDetails';
import SignUp from './Components/signup/Signup';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={ <Shop />} />
          <Route path='/shop' element={ <Shop />} />
          <Route path='/review' element={ <OrderReview />} />
          <Route path='/orders' element={ <Manage />} />
          <Route path='/login' element={ <Login />} />
          <Route path='/signup' element={ <SignUp />} />


          <Route path='/product/:productKey' element={ <ProductDetails />} />
          <Route path='*' element={ <Error />} />
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
