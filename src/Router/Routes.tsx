import { Outlet, RouterProvider, createBrowserRouter, useLocation } from 'react-router-dom';
import { AuthProvider } from '../app/context/AuthContext';
import { ProtectedRoute } from './ProtectedRoute';

import { motion } from 'framer-motion';
import { OrdersProvider } from '../app/context/OrdersContext';
import { UsersProvider } from '../app/context/UsersContext';

import { NavBar } from '../view/components/NavBar';

import { Home } from '../view/pages/Home';
import { History } from '../view/pages/History';
import { Menu } from '../view/pages/Menu';
import { Users } from '../view/pages/Users';
import { Profile } from '../view/pages/Profile';
import { Authentication } from '../view/pages/Authentication';
import { ProductsProvider } from '../app/context/ProductsContext';
import { CategoriesProvider } from '../app/context/CategoriesContext';
import { IngredientsProvider } from '../app/context/IngredientsContext';

function AppLayout() {
  const { pathname } = useLocation();

  return (
    <AuthProvider>
      <OrdersProvider>
        <ProductsProvider>
          <IngredientsProvider>
            <CategoriesProvider>
              <UsersProvider>
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
                        },
                        in: {
                          opacity: 1,
                        },
                        out: {
                          opacity: 0,
                        }
                      }}
                      transition={{
                        type: 'tween',
                        ease: 'linear',
                        duration: 0.3
                      }}
                    >

                      <Outlet />
                    </motion.div>
                  </div>
                </ProtectedRoute>
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
        path: '/history',
        element: <History />
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
