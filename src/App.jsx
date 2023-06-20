import vector from "./Images/Vector.png";
import vector2 from "./Images/Vector 2.png";

function App() {
  return (
    <>
      <div className="flex lg:w-2/5  relative sm:mx-auto top-32 space-y-10 min-h-full  flex-col justify-center px-3 py-3 ">
        <div className="flex justify-center flex-col sm:mx-auto sm:w-full sm:max-w-sm space-y-3">
          <h2 className="my-5 text-center text-5xl sm:text-6xl font-normal leading-10 tracking-tight text-white">
            Sign in
          </h2>
          <p className="self-center  font-normal text-center text-base text-white leading-5">
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
                  className="block peer w-80 h-11 max-w-xs rounded-morelg border-0 py-1.5 bg-input/10 text-white font-normal text-sm placeholder-transparent focus:ring-0 "
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 -top-7 text-gray-300 text-lg transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-white peer-focus:-top-7 peer-focus:text-gray-300  peer-focus:text-lg "
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
                  className="block peer w-80 h-11 max-w-xs rounded-morelg border-0 py-1.5 bg-input/10 text-white font-normal text-sm placeholder-transparent focus:ring-0"
                />
                <label
                  htmlFor="password"
                  className="absolute left-3 -top-7 text-gray-300 text-lg transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-white peer-focus:-top-7 peer-focus:text-gray-300  peer-focus:text-lg"
                >
                  Password
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-4 mx-auto sm:w-80 max-w-xs">
              <div className="flex  justify-between items-center ">
                <div class="flex items-center">
                  <input
                    id="checkbox"
                    type="checkbox"
                    class="w-4 h-4  border-white rounded"
                  />
                  <label
                    htmlFor="checkbox"
                    class="ml-2 text-sm font-normal text-white"
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
          className="absolute bottom-0 w-full"
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

export default App;
