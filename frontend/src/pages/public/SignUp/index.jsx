import { LeftAuthForm, RightAuthForm } from "@/components";
import { useTitle } from "@/hooks";

const SignUp = () => {
    useTitle("Sign Up");
    
  
    
    const handleSubmit = async (formData) => {
      const { email, password } = formData;
      console.log(email,password);
    alert(formData);
     

       
    };
    return (
        <div className="flex flex-col md:flex-row">
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