
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import router from './routes/router';

function App() {
  return (
    <div>
      <RouterProvider router={createBrowserRouter(router)} />
    </div>
  );
}

export default App;
