import LeftAuthForm from "../Left";
import RightAuthForm from "../Right";

const SignIn = () => {
  
  const handleSubmit = (formData) => {
    formData.preventDefault();
    console.log("Sign in:", formData.target.email.value, formData.target.password.value);
  };

  return (
    <div className="flex flex-col md:flex-row ">
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
