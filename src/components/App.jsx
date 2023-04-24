import { Routes, Route } from 'react-router-dom';
// import css from './App.module.css';
import About from '../components/Pages/About';
import Home from '../components/Pages/Home';
import Products from '../components/Pages/Products';
import NotFound from '../components/Pages/NotFound';
import { StyledLink, Navigation } from './App.styled';
import { ProductDetails } from './Pages/ProductDeatails';

export const App = () => {
  return (
    <div>
      <Navigation>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/Products">Products</StyledLink>
      </Navigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
