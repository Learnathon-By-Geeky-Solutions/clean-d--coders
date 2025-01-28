import { LeftSignUp } from "@/components";
import { RightSignIn } from "@/components/pageComponents/SignIn";
import { useTitle } from "@/hooks";

const SignIn = () => {
    useTitle("Sign In");
    return (
        <div className="flex">
          <LeftSignUp/>  
          <RightSignIn/>
        </div>
    );
};

export default SignIn;