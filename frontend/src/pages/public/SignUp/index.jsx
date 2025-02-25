import { LeftAuthForm, RightAuthForm } from "@/components";
import { useTitle } from "@/hooks";
import { useUserStore } from "@/store";
import { useNavigate } from "react-router";

const SignUp = () => {
    useTitle("Sign Up");
    const navigate = useNavigate();
    const signUp = useUserStore((state) => state.signUp);
   
    
    const handleSubmit = async (formData) => {
    
      try {
        const email = formData.email?.value || formData.email;
            const password = formData.password?.value || formData.password;

            if (!email || !password) {
                throw new Error("Email and password are required");
            }

        await signUp(email, password);
        navigate("/dashboard"); 
    } catch (error) {
        alert(error);
        console.error("Signup error:", error);
    } 
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