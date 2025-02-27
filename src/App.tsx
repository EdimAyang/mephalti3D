import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';
import Contact from './pages/contacts/Contact';
import { AppStyle, GlobalStyles } from './Global';
import Create from './pages/create/Create';
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
        path: "create",
        element: <Create />
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
