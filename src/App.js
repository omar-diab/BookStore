import './App.css';
import { Header, Footer} from './components';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage'
import Authors from './pages/authors/Authors'
import About from './pages/about-us/About'
import Contact from './pages/contact-us/Contact'
import Book from './pages/book/Book'
import Cart from './pages/cart/Cart'
import Login from './pages/forms/Login'
import Register from './pages/forms/Register'

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about-us' element={<About/>}/>
            <Route path='/authors' element={<Authors/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/contact-us' element={<Contact/>}/>
            <Route path='/book/:id' element={<Book/>}/>
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
