import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from '../view/pages/Home';
import { History } from '../view/pages/History';
import { Menu } from '../view/pages/Menu';
import { Users } from '../view/pages/Users';
import { Profile } from '../view/pages/Profile';
import { AuthGuard } from './AuthGuard';
import { AppLayout } from '@view/layouts/AppLayout';
import { Signin } from '@view/pages/Authentication/signin';
import { Signup } from '@view/pages/Authentication/signup';

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
          <Route path="/auth/signin" element={<Signin />} />
          <Route path="/auth/signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
