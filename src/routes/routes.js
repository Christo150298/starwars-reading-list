import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Home from '../views/Home.jsx';
import Layout from '../layout/Layout.jsx';
import DetailsPeople from '../views/DetailsPeople.jsx';
import DetailsPlanet from '../views/DetailsPlanet.jsx';
import DetailsVehicle from '../views/DetailsVehicle.jsx';

const innerRoutes = [
    {
        path:"/",
        element:<Home/>
    },
    { 
        path:"/chardetails/:character",
        element: <DetailsPeople />
    },
    {
        path:"/planetdetails/:planet",
        element: <DetailsPlanet />
    },
    {
        path:"/vehicledetails/:vehicle",
        element: <DetailsVehicle />
    }
];

const fullRoutes = [{
    path:'/',
    element: <Layout/>,
    children: innerRoutes
}];

const router = createBrowserRouter(fullRoutes)

export default router;