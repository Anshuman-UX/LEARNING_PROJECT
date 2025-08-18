import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#1c2412] text-white px-6 py-3 flex justify-between items-center shadow-md">
      <Link to="/" className="text-2xl font-bold">Redify</Link>
      <div className="space-x-6">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/explore" className="hover:underline">Explore</Link>
        <Link to="/workspace" className="hover:underline">Workspace</Link>
        <Link to="/assistant" className="hover:underline">AI Assistant</Link>
        <Link to="/login" className="hover:underline">Login</Link>
        <Link to="/signup" className="hover:underline">Signup</Link>
        <Link to="/admin" className="hover:underline">Admin</Link>
      </div>
    </nav>
  );
}

export default Navbar;
