import { Users, BookOpen, CheckCircle, XCircle, BarChart2 } from "lucide-react";

function AdminDashboard() {
  // Dummy books for approvals
  const books = [
    { id: 1, title: "Sample Book 1", author: "Author A" },
    { id: 2, title: "Sample Book 2", author: "Author B" },
    { id: 3, title: "Sample Book 3", author: "Author C" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h2 className="text-4xl font-bold text-[#1c2412] mb-8">📊 Admin Dashboard</h2>

      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Active Users Chart */}
        <div className="bg-white shadow-lg p-6 rounded-2xl">
          <h3 className="font-bold flex items-center gap-2 mb-4">
            <BarChart2 className="text-green-600" /> Active Users Chart
          </h3>
          <div className="h-48 flex items-center justify-center text-gray-400 italic border border-dashed rounded-lg">
            Chart will be displayed here
          </div>
        </div>

        {/* Live Users */}
        <div className="bg-white shadow-lg p-6 rounded-2xl flex flex-col justify-center items-center">
          <Users size={40} className="text-green-600 mb-3" />
          <h3 className="font-bold text-lg">Live Users</h3>
          <p className="text-gray-700 text-2xl font-semibold mt-2">Currently: 12</p>
        </div>
      </div>

      {/* Book Approvals */}
      <div className="mt-8 bg-white shadow-lg p-6 rounded-2xl">
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
          <BookOpen className="text-blue-600" /> Book Approvals
        </h3>

        {books.map((book) => (
          <div
            key={book.id}
            className="flex justify-between items-center border-b py-3 last:border-0 hover:bg-gray-50 px-2 rounded transition"
          >
            <div>
              <span className="font-semibold">{book.title}</span>
              <p className="text-sm text-gray-500">by {book.author}</p>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-1 bg-green-600 text-white px-3 py-1.5 rounded-lg hover:bg-green-700 transition">
                <CheckCircle size={16} /> Accept
              </button>
              <button className="flex items-center gap-1 bg-red-600 text-white px-3 py-1.5 rounded-lg hover:bg-red-700 transition">
                <XCircle size={16} /> Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
