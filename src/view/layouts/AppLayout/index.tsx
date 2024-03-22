import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import { NavBar } from '@view/components/NavBar';

export function AppLayout() {
  const { pathname } = useLocation();

  return (
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
  );
}
