import { Footer, Navbar } from "@/components";
import { useUserStore } from "@/store";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";

const App = () => {
  const {pathname} = useLocation()
  const initializeAuth = useUserStore((state) => state.initializeAuth);
  const setUser = useUserStore((state) => state.setUser);
  
  useEffect(() => {
    const setup = async () => {
      await setUser();
      await initializeAuth();
      console.log("Updated user data: ", useUserStore.getState().user);
    };
  
    setup();
    console.log(useUserStore.getState().user)
  }, [setUser, initializeAuth]);


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