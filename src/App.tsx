import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';
import { AppStyle, GlobalStyles } from './Global';
function App() {

  const router = createBrowserRouter([
      {
        path: "/",
        element : <Home />
      },
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
