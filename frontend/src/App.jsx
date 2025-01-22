import { Footer, Navbar } from "@/components";
import { Outlet, useLocation } from "react-router";

const App = () => {
  const {pathname} = useLocation()
  if(pathname.includes('dashboard'))
    return (
      <Outlet />
    ); 
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;