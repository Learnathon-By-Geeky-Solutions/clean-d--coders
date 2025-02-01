import { SignInPage } from "@/components";
import { useTitle } from "@/hooks";

const SignIn = () => {
    useTitle("Sign In");
    return (
        <div >
         <SignInPage/>
        </div>
    );
};

export default SignIn;