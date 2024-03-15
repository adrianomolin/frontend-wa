import { Outlet, RouterProvider, createBrowserRouter, useLocation } from 'react-router-dom';
import { AuthProvider } from '../app/context/authContext';
import { ProtectedRoute } from './ProtectedRoute';

import { motion } from 'framer-motion';
import { OrdersProvider } from '../app/context/ordersContext';
import { UsersProvider } from '../app/context/usersContext';

import { NavBar } from '../view/components/NavBar';

import { Home } from '../view/pages/Home';
import { Orders } from '../view/pages/Orders';
import { Menu } from '../view/pages/Menu';
import { Users } from '../view/pages/Users';
import { Profile } from '../view/pages/Profile';
import { Authentication } from '../view/pages/Authentication';
import { ModalProvider } from '../app/context/modalContext';
import { Modal } from '../view/components/Modals';
import { ProductsProvider } from '../app/context/productsContext';
import { CategoriesProvider } from '../app/context/categoriesContext';
import { IngredientsProvider } from '../app/context/ingredientsContext';



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
