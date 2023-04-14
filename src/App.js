import InjectContext from './store/appContext';
import router from './routes/routes';
import { RouterProvider } from 'react-router-dom';


function App() {
  return (
    <InjectContext>
      <RouterProvider 
        router={router}>
      </RouterProvider>      
    </InjectContext>
  );
}

export default App;
