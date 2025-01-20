import { Footer, Navbar } from "@/components";
import { Outlet } from "react-router";

const App = () => {


  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;