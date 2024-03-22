import { BrowserRouter, Outlet, Route, Routes, useLocation } from 'react-router-dom';

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
import { AuthGuard } from './AuthGuard';

function AppLayout() {
  const { pathname } = useLocation();

  return (
    <OrdersProvider>
      <ProductsProvider>
        <IngredientsProvider>
          <CategoriesProvider>
            <UsersProvider>
              <div className='container'>
                <NavBar />
                <motion.div
                  key={pathname}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    flex: 1,
                    marginLeft: 108,
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
            </UsersProvider>
          </CategoriesProvider>
        </IngredientsProvider>
      </ProductsProvider>
    </OrdersProvider>
  );
}

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard isPrivate={true}/>}>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/users" element={<Users />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>

        <Route element={<AuthGuard isPrivate={false}/>}>
          <Route path="/auth/login" element={<Authentication />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
