import { LeftAuthForm, RightAuthForm } from "@/components";
import { useTitle } from "@/hooks";
import { useUserStore } from "@/store";
import { useNavigate } from "react-router";

const SignIn = () => {
  useTitle("Sign In");
  const navigate = useNavigate();
  const { signIn } = useUserStore();

  const handleSubmit = async (formData) => {
    try {
      const email = formData.email?.value || formData.email;
      const password = formData.password?.value || formData.password;

      if (!email || !password) {
        throw new Error("Email and password are required");
      }

      await signIn(email, password);
      console.log(useUserStore.getState);
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
