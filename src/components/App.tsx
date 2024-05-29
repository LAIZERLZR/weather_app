import { Provider } from 'react-redux';
import Header from './Header/Header';
import { store } from '../store/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import Countries from './Countries/Countries';
import Cities from './Cities/Cities';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Header />
          <HomePage />
        </>
      ),
    },
    {
      path: '/countries',
      element: (
        <>
          <Header />
          <Countries />
        </>
      ),
    },
    {
      path: '/countries/:countryCode',
      element: (
        <>
          <Header />
          <Cities />
        </>
      ),
    },
  ]);

  return (
    <>
      {/* <Header /> */}
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
