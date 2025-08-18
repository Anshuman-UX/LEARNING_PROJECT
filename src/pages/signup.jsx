function Signup() {
  return (
    <div className="p-8 flex justify-center">
      <form className="bg-white shadow-lg p-6 rounded w-96">
        <h2 className="text-2xl font-bold mb-4 text-[#1c2412]">Signup</h2>
        <input type="text" placeholder="Name" className="w-full mb-3 border p-2 rounded" />
        <input type="email" placeholder="Email" className="w-full mb-3 border p-2 rounded" />
        <input type="password" placeholder="Password" className="w-full mb-3 border p-2 rounded" />
        <button className="bg-[#1c2412] text-white w-full py-2 rounded">Signup</button>
      </form>
    </div>
  );
}
export default Signup;
