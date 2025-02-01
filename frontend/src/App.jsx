import { Footer, Navbar } from "@/components";
import { useUserStore } from "@/store";
import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router";

const App = () => {
  const {pathname} = useLocation()
  const {user,  setUser} = useUserStore()
  useEffect(() => {
    setUser()
  }, [setUser])

  if(user === null){
    return <Navigate to="/sign-up" replace/>
  }
 

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