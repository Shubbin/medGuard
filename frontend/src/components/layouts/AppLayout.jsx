import { Outlet } from "react-router-dom";
import Navbar from "./../navbar";
import Footer from "../Footer";

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
