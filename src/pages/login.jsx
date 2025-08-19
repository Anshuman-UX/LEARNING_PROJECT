function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-100 p-6">
      <form className="bg-white shadow-2xl p-8 rounded-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-[#1c2412] text-center">Welcome Back 👋</h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-2 border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        {/* Remember & Forgot */}
        <div className="flex justify-between items-center text-sm mb-4">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-green-600" />
            Remember me
          </label>
          <a href="#" className="text-green-600 hover:underline">
            Forgot password?
          </a>
        </div>

        {/* Login Button */}
        <button className="bg-[#1c2412] text-white w-full py-3 rounded-lg font-semibold hover:bg-[#2a3520] transition">
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-gray-400 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Signup link */}
        <p className="text-center text-gray-600">
          Don’t have an account?{" "}
          <a href="#" className="text-green-600 font-semibold hover:underline">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login;
