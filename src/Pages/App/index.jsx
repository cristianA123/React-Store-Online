
import Home from './../home/index';
import { MyAccount } from '../MyAccount';
import { MyOrder } from '../MyOrder';
import { MyOrders } from '../MyOrders';
import { NotFound } from '../NotFound';
import { SigIn } from '../SignIn';

import { useRoutes, BrowserRouter } from 'react-router-dom'

import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/my-account',
      element: <MyAccount />
    },
    {
      path: '/my-order',
      element: <MyOrder />
    },
    {
      path: '/my-orders',
      element: <MyOrders />
    },
    {
      path: '/sign-in',
      element: <SigIn />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])

  return routes
}

const App = () => {


  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
