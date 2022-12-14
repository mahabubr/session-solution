import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Routes/routes';

function App() {
  return (<>
    <Toaster />
    <RouterProvider router={router} />
  </>
  );
}

export default App;
