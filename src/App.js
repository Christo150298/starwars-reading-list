import router from './routes/routes';
import { RouterProvider } from 'react-router-dom';
import { StoreProvider } from './store/appContext';

const App = () => {
  return (
    <StoreProvider>
      <RouterProvider router={router}></RouterProvider>  
    </StoreProvider> 
  );
};

export default App;
