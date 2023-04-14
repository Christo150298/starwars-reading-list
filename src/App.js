import injectContext from './store/appContext';
import router from './routes/routes';
import { RouterProvider } from 'react-router-dom';


function App() {
  return (
    <injectContext>
      <RouterProvider 
        router={router}>
      </RouterProvider>      
    </injectContext>
  );
}

export default App;
