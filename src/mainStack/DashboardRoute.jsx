import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from '../screens/Layout/Layout';

const Home = lazy(() => import('../screens/Home/Home.jsx'));
const Products = lazy(() => import('../screens/Products/Products.jsx'));
const Categories = lazy(() => import('../screens/Categories/Categories.jsx'));
const Detail = lazy(() => import('../screens/Detail/Detail.jsx'));
const Contact = lazy(() => import('../screens/Contact/Contact.jsx'));

export const DashboardRoute = () => {
    return(
        <Layout>
            <Routes>
                <Route
                    path='/home'
                    element= {
                        <React.Suspense>
                            <Home />
                        </React.Suspense>
                    }
                />
                
                <Route
                    path='/products'
                    element={
                        <React.Suspense>
                            <Products />
                        </React.Suspense>
                    }
                /> 

                <Route
                    path='/categories'
                    element={
                        <React.Suspense>
                            <Categories />
                        </React.Suspense>
                    }
                />

                <Route
                    path='/detail'
                    element={
                        <React.Suspense>
                            <Detail />
                        </React.Suspense>
                    }
                />

                <Route
                    path='/contact'
                    element={
                        <React.Suspense>
                            <Contact />
                        </React.Suspense>
                    }
                />  

            </Routes>
        </Layout>
    )
}