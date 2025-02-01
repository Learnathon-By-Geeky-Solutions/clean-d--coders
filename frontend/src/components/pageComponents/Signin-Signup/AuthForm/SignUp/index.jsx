import { useUserStore } from "@/store";
import LeftAuthForm from "../Left";
import RightAuthForm from "../Right";
const SignUp = () => {

  const {user,setUser} = useUserStore();
  const handleSubmit = (email,password) => {
    console.log("Sign up:", { email, password });
    setUser()
    console.log(user)
  };

  return (
    <div className="flex flex-col md:flex-row ">
      <LeftAuthForm />
      <RightAuthForm
        title="Create your account"
        buttonName="Sign up"
        routeName="Sign in"
        handleSubmit={handleSubmit}
        routePath="/sign-in"
      />
    </div>
  );
};

export default SignUp;
