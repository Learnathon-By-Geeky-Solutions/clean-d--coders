import { FaGoogle, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

const RightAuthForm = ({title, buttonName, routeName, handleSubmit, routePath}) => {
  const onSubmit = (e) => {
    handleSubmit(e);
  };

  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center p-8 ">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          <p className="mt-2 text-gray-600">Start your mentorship journey today</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={onSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent 
            rounded-md shadow-sm text-sm font-medium text-white 
            bg-primary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 
            focus:ring-accent transition-colors duration-200"
          >
         {buttonName}
          </button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-colors duration-200">
              <FaGoogle className="text-[#DB4437] text-xl" />
            </button>
            <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-colors duration-200">
              <FaLinkedin className="text-[#0077B5] text-xl" />
            </button>
            <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-colors duration-200">
              <FaGithub className="text-[#333] text-xl" />
            </button>
          </div>
        </div>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to= {routePath} className="font-medium  hover:text-accent/80 transition-colors duration-200">
            {routeName}
          </Link>
        </p>
      </div>
    </div>
  );
};
RightAuthForm.propTypes = {
  title: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired,
  routeName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  routePath: PropTypes.string.isRequired,
};

export default RightAuthForm;