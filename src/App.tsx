import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';
import Contact from './pages/contacts/Contact';
import Shop from './pages/shop/Shop'
import { AppStyle, GlobalStyles } from './Global';
function App() {

  const router = createBrowserRouter([
      {
        path: "/",
        element : <Home />
      },

      {
        path: "contacts",
        element: <Contact />
      },

      {
        path: "shop",
        element: <Shop />
      }
  ])

  return (
    <>
    <GlobalStyles />
    <AppStyle>
      <RouterProvider router = {router} />
    </AppStyle>
    </>
  );
}

export default App;
