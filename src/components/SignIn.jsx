import vector from "../Images/Vector.png";
import vector2 from "../Images/Vector 2.png";

export default function SignIn() {
  return (
    <>
      <div className="flex lg:w-2/5  relative sm:mx-auto top-14 space-y-10 min-h-full  flex-col justify-center px-3 py-3 ">
        <div className="flex justify-center flex-col sm:mx-auto sm:w-full sm:max-w-sm space-y-3">
          <h2 className="my-5 text-center text-5xl sm:text-6xl font-normal leading-10 tracking-tight text-gray-600 dark:text-gray-200">
            Sign in
          </h2>
          <p className="self-center  font-normal text-center text-base text-gray-800 dark:text-gray-200 leading-5">
            Sign in and start managing your candidates!
          </p>
        </div>

        <div className=" sm:mx-auto sm:w-auto sm:max-w-sm">
          <form className="space-y-6">
            <div className="flex flex-col items-center space-y-10">
              <div className="mt-2 relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Login"
                  autoComplete="email"
                  required
                  className="block peer w-80 h-11 max-w-xs rounded-morelg border-0 py-1.5
                   dark:bg-input/10 bg-input  text-gray-800 dark:text-gray-200 font-normal text-sm placeholder-transparent 
                   focus:ring-0 "
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 -top-7 dark:text-gray-200 text-gray-800 text-lg transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm dark:peer-placeholder-shown:text-gray-200 peer-placeholder-shown:text-gray-800 peer-focus:-top-7
                   dark:peer-focus:text-gray-200 peer-focus:text-gray-800  peer-focus:text-lg "
                >
                  Login
                </label>
              </div>

              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  required
                  className="block peer w-80 h-11 max-w-xs rounded-morelg border-0 py-1.5
                  dark:bg-input/10 bg-input  text-gray-800 dark:text-gray-200 font-normal text-sm placeholder-transparent 
                  focus:ring-0 "
                />
                <label
                  htmlFor="password"
                  className="absolute left-3 -top-7 dark:text-gray-200 text-gray-800 text-lg transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm dark:peer-placeholder-shown:text-gray-200 peer-placeholder-shown:text-gray-800 peer-focus:-top-7
                  dark:peer-focus:text-gray-200 peer-focus:text-gray-800  peer-focus:text-lg "
                >
                  Password
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-4 mx-auto sm:w-80 max-w-xs">
              <div className="flex  justify-between items-center ">
                <div className="flex items-center">
                  <input
                    id="checkbox"
                    type="checkbox"
                    className="w-4 h-4  dark:border-white dark:accent rounded"
                  />
                  <label
                    htmlFor="checkbox"
                    className="ml-2 text-sm font-normal text-gray-800 dark:text-gray-200 "
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  className="block font-normal text-button hover:text-button/80 text-sm"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="flex justify-center items-center sm:w-80 h-11 w:auto rounded-morelg bg-button text-base font-normal leading-5 text-white  hover:bg-button/80 "
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="bottom-0 left-0">
        <img
          src={vector}
          className="absolute bottom-0 w-full "
          alt="graphic design in bottom."
        ></img>
        <img
          src={vector2}
          className="absolute  bottom-0 w-full "
          alt="graphic design in bottom."
        ></img>
      </div>
    </>
  );
}
