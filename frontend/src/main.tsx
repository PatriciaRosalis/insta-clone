import App from './App.tsx'
import * as ReactDOM from "react-dom/client";
import './index.css'
import Feed from './pages/Feed/index.tsx';
import React from 'react';
import Root from "./layout/nav.tsx";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";

const router = createBrowserRouter([
  {
    // path: "/",
    element: <Root />,
    children: [
      {
        path: "/", 
        element: <Navigate to="/sign-in" replace />
      },
      {
        path: "/sign-in",
        element: <App />,

      },
      {
        path: "/feed",
        element: <Feed />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// const root = createRoot(document.getElementById("root")!);

// root.render(
//   <BrowserRouter>
//     <Routes  >
//       <Route path="/" element={<Root />} />
//       <Route path="feed" element={<Feed />} />
//     </Routes>
//   </BrowserRouter>
// );
