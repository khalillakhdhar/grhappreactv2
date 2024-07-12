import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/auth/login';
import Subscribe from './components/auth/subscribe';
import Accueil from './components/dashboard/Accueil';
import Conge from './components/dashboard/Conge';
import Effectif from './components/dashboard/Effectif';
import Profil from './components/dashboard/Profil';
import Root from './components/menu/root';
import './index.css';
import './styles/tailwind.css';

import reportWebVitals from './reportWebVitals';
const router = createBrowserRouter([
  {
    path: "dashboard",
    element: <Root />,
    children:[
      {path:'',
        element:<Accueil></Accueil>
      },
      {
        path:'profile',
        element:<Profil></Profil>
      },
      {
        path:'conges',
        element:<Conge></Conge>

      },
      {
        path:'effectif',
        element:<Effectif></Effectif>

      }
    ]
  },
  {
    path:'',
    element:<Login></Login>
  },
  {
    path:'register',
    element:<Subscribe></Subscribe>
  }

]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
