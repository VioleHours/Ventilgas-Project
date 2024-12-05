import { Routes, Route } from 'react-router-dom';
import PATHROUTES from './helpers/PathRouthes';
import { Footer } from "./components/Footer";
import Home from "./views/Home";
import Products from './views/Products';
import Details from './views/Details';


function App() {
  return (
    <>
      <Routes>
        <Route path={PATHROUTES.HOME} element={<Home />} />
        <Route path={PATHROUTES.PRODUCTS} element={<Products />} />
        <Route path={PATHROUTES.DETAIL} element={<Details />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
