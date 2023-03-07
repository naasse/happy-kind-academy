import { Main } from "./views";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./components/common/layout/Root";
import ErrorPage from "./views/ErrorPage";

const routerBaseName =
  process.env.NODE_ENV === "production" ? "/happy-kind-academy" : undefined;

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
    basename: routerBaseName,
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
