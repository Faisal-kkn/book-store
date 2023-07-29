import React from 'react';
import { AppRouter } from './Routes/AppRouter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer />
      <AppRouter />
    </>
  );
}

export default App;
