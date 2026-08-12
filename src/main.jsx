import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Employeeform from './Employeeform.jsx';
import ViewWorkers from './ViewWorkers.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Employeeform/>,
  },
  {
    path: "/viewworkers",
    element: <ViewWorkers/>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={router} />

  </StrictMode>,
)
