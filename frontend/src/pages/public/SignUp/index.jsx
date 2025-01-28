import { LeftSignUp, RightSignUp } from "@/components";
import { useTitle } from "@/hooks";

const SignUp = () => {
    useTitle("Sign Up");
    return (
        <div className="flex">
            <LeftSignUp/>
            <RightSignUp/>
        </div>
    );
};

export default SignUp;