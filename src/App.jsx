import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Login from './screens/LogIn/Login';
import SignUp from './screens/SignUp/SignUp';

import { DashboardRoute } from './mainStack/DashboardRoute';

export default function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Navigate replace to='/home' /> }/>
          <Route 
            path='/login'
            element={
              <Login />
            }
          />
          <Route 
            path='/signup'
            element={
              <SignUp />
            }
          />
          <Route
            path='/*'
            element={
              <DashboardRoute />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}