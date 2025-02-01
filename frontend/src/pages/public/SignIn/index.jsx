import { LeftAuthForm, RightAuthForm } from "@/components";
import { useTitle } from "@/hooks";

const SignIn = () => {
    useTitle("Sign In");
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("User signed in sucessfully!!");
      };
    return (
        <div className="flex flex-col md:flex-row">
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