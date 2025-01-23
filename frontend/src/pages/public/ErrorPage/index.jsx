import { ErrorCable, NotFound } from "@/assets";
import { Button, Img } from "@/components";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16 h-screen">
      <div className="flex flex-col items-center justify-around w-full xl:w-1/2 relative h-full">
        <div className="relative">
          <div className="absolute text-center md:text-left">
            <p className="text-7xl md:text-9xl  text-center text-red-600 animate-bounce font-extrabold">404</p>
            <div className="">
              <h1 className="my-2 text-gray-800 font-bold text-2xl">
                Looks like you&apos;ve found the doorway to the great nothing
              </h1>
              <p className="my-2 text-gray-800">
                Sorry about that! Please visit our <span><Button
                variant="destructive"
                onClick={handleClick}
                className="mx-1"
                size="sm"
              >
               Home
              </Button></span> to get where you need
                to go.
              </p>
              
            </div>
          </div>
          <div>
            <Img alt="" src={NotFound} />
          </div>
        </div>
      </div>
      <div>
        <Img className="animate-pulse" alt="" src={ErrorCable} />
      </div>
    </div>
  );
};

export default ErrorPage;
