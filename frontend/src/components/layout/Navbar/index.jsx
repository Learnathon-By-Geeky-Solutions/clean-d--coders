/**
 * v0 by Vercel.
 * @see https://v0.dev/t/lJwnQlHSEBA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router";
import { HomeIcon, LayoutDashboard, LocateIcon, Menu, UserRound } from "lucide-react";
import { Img } from "@/components/common";
import { NavLogo } from "@/assets";

const Navbar = () => {
  const { pathname } = useLocation();
  const menuItems = [
    {
      name: "Home",
      href: "/",
      icon: HomeIcon,
    },
    {
      name: "About",
      href: "/about",
      icon: LocateIcon,
    },
    {
      name: "Mentors",
      href: "/mentors",
      icon: UserRound,
    },
  ];
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-primary">
      <Sheet>
      <div className="flex items-center justify-between w-full">
          <Link
            to="/"
            className="h-full"
            prefetch={false}
          >
            <Img src={NavLogo} alt="Navbar Logo" className="h-10 bg-transparent"/>
          </Link>

        <SheetTrigger className="lg:hidden">
          <div className="rounded-xl p-3">
            <Menu className="text-primary-foreground"/>
          </div>
        </SheetTrigger>
      </div>
        <SheetContent side="left" className="flex flex-col justify-between bg-primary text-primary-foreground">
          <div className="grid gap-2 py-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                prefetch={false}
                className="w-full"
              >
                <Button className={`w-full flex items-center justify-between ${pathname === item.href ? "text-orange-300":""}`} variant="navlink">
                <item.icon />
                <span>{item.name}</span>
                </Button>
              </Link>
            ))}
          </div>
          <Button variant="default" className="w-full">
            <Link
              to="/dashboard"
              className="flex w-full items-center py-2 text-lg font-semibold justify-between"
              prefetch={false}
            >
              <LayoutDashboard />
              <span>Dashboard</span>
            </Link>
          </Button>
        </SheetContent>
      </Sheet>
      <nav className="ml-auto hidden lg:flex gap-6">
        {
          menuItems.map((item) => (<Link
          to={item.href}
          key={item.name}
          prefetch={false}
        >
        <Button variant="navlink" className={`${pathname === item.href ? "text-orange-300" : ""}`}>
          {item.name}
        </Button>
        </Link>))
        }
        <Link
          to="/dashboard"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          Dashboard
        </Link>
      </nav>
    </header>
  );
};
export default Navbar;
