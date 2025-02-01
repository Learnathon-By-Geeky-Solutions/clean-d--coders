import LeftAuthForm from "../Left";
import RightAuthForm from "../Right";
const SignUp = () => {
  const handleSubmit = async (formData) => {
    formData.preventDefault();
    alert("Signed up sucessfully");
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
