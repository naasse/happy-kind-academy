import { Footer } from "./Footer";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";

import "./Root.scss";

export function Root() {
  return (
    <>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
