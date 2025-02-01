import { SignUpPage } from "@/components";
import { useTitle } from "@/hooks";
const SignUp = () => {
    useTitle("Sign Up");
    return (
        <div className="min-h-screen bg-gray-50">
           <SignUpPage/>
        </div>
    );
};

export default SignUp;