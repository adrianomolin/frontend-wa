import { Outlet, RouterProvider, createBrowserRouter, useLocation } from 'react-router-dom';
import { AuthProvider } from '../context/authContext';
import { ProtectedRoute } from './ProtectedRoute';

import { motion } from 'framer-motion';
import { OrdersProvider } from '../context/ordersContext';
import { UsersProvider } from '../context/usersContext';

import { NavBar } from '../components/NavBar';

import { Home } from '../pages/Home';
import { Orders } from '../pages/Orders';
import { Menu } from '../pages/Menu';
import { Users } from '../pages/Users';
import { Profile } from '../pages/Profile';
import { Authentication } from '../pages/Authentication';
import { ModalProvider } from '../context/modalContext';
import { Modal } from '../components/Modals';
import { ProductsProvider } from '../context/productsContext';
import { CategoriesProvider } from '../context/categoriesContext';
import { IngredientsProvider } from '../context/ingredientsContext';



function AppLayout() {
  const { pathname } = useLocation();

  return (
    <AuthProvider>
      <OrdersProvider>
        <ProductsProvider>
          <IngredientsProvider>
            <CategoriesProvider>
              <UsersProvider>
                <ModalProvider>
                  <ProtectedRoute>
                    <div className='container'>
                      <NavBar />
                      <motion.div
                        key={pathname}
                        initial="initial"
                        animate="in"
                        style={{
                          flex: 1,
                          marginLeft: 108,
                        }}
                        variants={{
                          initial: {
                            opacity: 0,
                            transform: 'translateX(-50px)'
                          },
                          in: {
                            opacity: 1,
                            transform: 'translateX(0)'
                          },
                          out: {
                            opacity: 0,
                            transform: 'translateX(-50px)'
                          }
                        }}
                        transition={{
                          type: 'tween',
                          ease: 'linear',
                          duration: 0.5
                        }}
                      >

                        <Outlet />
                      </motion.div>
                    </div>
                    <Modal />
                  </ProtectedRoute>
                </ModalProvider>
              </UsersProvider>
            </CategoriesProvider>
          </IngredientsProvider>
        </ProductsProvider>
      </OrdersProvider>
    </AuthProvider>
  );
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/orders',
        element: <Orders />
      },
      {
        path: '/menu',
        element: <Menu />
      },
      {
        path: '/users',
        element: <Users />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/',
        element: <Home />
      },
    ]
  },
  {
    path: '/auth/login',
    element: (
      <AuthProvider>
        <Authentication />
      </AuthProvider>
    )
  },
]);


export function Routes() {
  return (
    <RouterProvider router={router} />
  );
}
