

import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';

export function MainLayout({ children }) {
  return (
    <div>
      <Navigation />
      <main>
        {children}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
