import { Main } from "./views";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./components/layout/Root";
import ErrorPage from "./views/ErrorPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <Main />,
        },
        {
          path: "about",
          element: <div>About</div>,
        },
      ],
    },
  ],
  {
    basename: "/happy-kind-academy",
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
