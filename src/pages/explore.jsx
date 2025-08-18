function Explore() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold text-[#1c2412] mb-4">Explore Books</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="font-bold">Book {i + 1}</h3>
            <p className="text-sm">Author Name</p>
            <button className="mt-2 bg-[#1c2412] text-white px-3 py-1 rounded">Read</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Explore;
