import { Footer, Navbar } from "@/components";
import { useUserStore } from "@/store";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";

const App = () => {
  const {pathname} = useLocation()
  const {setUser} = useUserStore()
  useEffect(() => {
    setUser()
  }, [setUser])
  if(pathname.startsWith('/dashboard'))
    return (
      <Outlet />
    ); 
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <div className="flex flex-col flex-1 w-full">
        <Outlet/>
      </div>
      <Footer />
    </div>
  );
};

export default App;