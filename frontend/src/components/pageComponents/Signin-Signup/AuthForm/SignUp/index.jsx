import LeftAuthForm from "../Left";
import RightAuthForm from "../Right";

const SignUp = () => {
  
  const handleSubmit = (email,password) => {
    console.log("Sign up:", { email, password });
  };

  return (
    <div className="flex flex-col lg:flex-row ">
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
