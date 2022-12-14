import React from 'react';
import './App.css'
import { AppRoutes } from './routes';
import { Provider } from 'react-redux';
import { store } from './store';
import 'react-loading-skeleton/dist/skeleton.css'

const App = () => {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  )
}

export default App;