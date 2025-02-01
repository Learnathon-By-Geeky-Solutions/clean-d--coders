import LeftAuthForm from "../Left";
import RightAuthForm from "../Right";

const SignIn = () => {
  
  const handleSubmit = (email,password) => {
    console.log("Sign up:", { email, password });
  };

  return (
    <div className="flex flex-col lg:flex-row ">
      <LeftAuthForm />
      <RightAuthForm
        title="Login your account"
        buttonName="Sign in"
        routeName="Sign up"
        handleSubmit={handleSubmit}
        routePath="/sign-up"
      />
    </div>
  );
};

export default SignIn;
