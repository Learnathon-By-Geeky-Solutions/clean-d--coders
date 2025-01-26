import { LeftSignUp, RightSignUp } from "@/components";
import { useTitle } from "@/hooks";

const SignUp = () => {
    useTitle("Sign Up");
    return (
        <div>
            <LeftSignUp/>
            <RightSignUp/>
        </div>
    );
};

export default SignUp;