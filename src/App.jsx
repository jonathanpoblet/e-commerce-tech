import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './screens/Layout/Layout';
import Categories from './screens/Categories/Categories';
import Contact from './screens/Contact/Contact';
import Detail from './screens/Detail/Detail';
import Home from './screens/Home/Home';
import Login from './screens/LogIn/Login';
import Products from './screens/Products/Products';
import SignUp from './screens/SignUp/SignUp';

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index  element={ <Home /> } />
          <Route path='/products' element={ <Products /> } />
          <Route path='/categories' element={ <Categories /> } />
          <Route path='/detail' element={ <Detail /> } />
          <Route path='/contact' element={ <Contact /> } />
        </Routes>
      </Layout>
      <Routes>
          <Route path='login' element={ <Login /> } />
          <Route path='signup' element={ <SignUp /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
