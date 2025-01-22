import { Footer, Navbar } from "@/components";
import { Outlet, useLocation } from "react-router";

const App = () => {
  const {pathname} = useLocation()
  if(pathname.startsWith('/dashboard'))
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