import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import './App.css'
import { AppRoutes } from './routes';
import { store } from './store';
import 'react-loading-skeleton/dist/skeleton.css';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <Provider store={store}>
      <AppRoutes />
      <ToastContainer />
    </Provider>
  )
}

export default App;